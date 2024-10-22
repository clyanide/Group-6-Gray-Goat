using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Bangershare_Backend.Models;
using Microsoft.EntityFrameworkCore;
using Bangershare_Backend.Repositories;
using Bangershare_Backend.Services;
using Bangershare_Backend.Interfaces;
using Bangershare_Backend.Services.Communications;
using Bangershare_Backend.Security.Hashing;
using Bangershare_Backend.Security.Tokens;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace Bangershare_Backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        private readonly string DevCorsPolicy = "_devCors";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => {
                options.AddPolicy(DevCorsPolicy,
                    builder => {
                        builder
                            .AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    });
            });

            services.AddControllers();

            var builder = new SqlConnectionStringBuilder(
                Configuration.GetConnectionString("DB"));

            services.AddDbContextPool<BangerShareContext>(options => options
                .UseSqlServer(builder.ConnectionString));

            services.AddScoped<UserService>();
            services.AddScoped<PlaylistService>();
            services.AddScoped<SongService>();
            services.AddScoped<FriendService>();
            services.AddScoped<SpotifyAPIService>();
            services.AddScoped<YoutubeAPIService>();

            services.AddScoped<IRepository<User>, UserRepository>();
            services.AddScoped<IRepository<UserPlaylist>, UserPlaylistRepository>();
            services.AddScoped<IRepository<Playlist>, PlaylistRepository>();
            services.AddScoped<IRepository<UserLike>, UserLikeRepository>();
            services.AddScoped<FriendRepository>();
            services.AddScoped<SongRepository>();

            services.AddScoped<IUnitOfWork, UnitOfWork<BangerShareContext>>();

            services.AddSingleton<IPasswordHasher, PasswordHasher>();
            services.AddSingleton<ITokenHandler, Security.Tokens.TokenHandler>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();

            var spoitfyConfig = new SpotifyConfig();
            Configuration.Bind("Spotify", spoitfyConfig);
            services.AddSingleton(spoitfyConfig);

            var youtubeConfig = new YoutubeConfig();
            Configuration.Bind("Youtube", youtubeConfig);
            services.AddSingleton(youtubeConfig);

            services.Configure<TokenOptions>(Configuration.GetSection("TokenOptions"));
            var tokenOptions = Configuration.GetSection("TokenOptions").Get<TokenOptions>();

            var signingConfigurations = new SigningConfigurations();
            services.AddSingleton(signingConfigurations);

            // middleware used to validate access token in header of requests 
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(jwtBearerOptions =>
                {
                    jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = tokenOptions.Issuer,
                        ValidAudience = tokenOptions.Audience,
                        IssuerSigningKey = signingConfigurations.Key,
                        ClockSkew = TimeSpan.Zero
                    };
                });

            services.AddAutoMapper(typeof(Startup));

            // swagger 
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "BangerShare API", Version = "v1" });
                
                // allows for authorization in swagger 
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. " + Environment.NewLine +
                      "Enter 'Bearer' [space] and then your token in the text input below. " + Environment.NewLine +
                      "Example: 'Bearer 12345abcdef'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement()
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header,
                            },
                            new List<string>()
                    }
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors(DevCorsPolicy);   
            }

            app.UseHttpsRedirection();

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "BangerShare API");
                c.RoutePrefix = string.Empty; // launch swagger from root
            });

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
