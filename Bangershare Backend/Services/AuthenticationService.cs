using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Interfaces;
using Bangershare_Backend.Services.Communications;
using Bangershare_Backend.Models.Security;

namespace Bangershare_Backend.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly UserService _userService;
        private readonly IPasswordHasher _passwordHasher;
        private readonly ITokenHandler _tokenHandler;

        public AuthenticationService(UserService userService, IPasswordHasher passwordHasher, ITokenHandler tokenHandler)
        {
            _userService = userService;
            _passwordHasher = passwordHasher;
            _tokenHandler = tokenHandler;
        }
        
        public async Task<BaseResponse<AccessToken>> CreateAccessToken(string username, string password)
        {
            var user = await _userService.FindFirstOrDefault(u => u.Username.Equals(username));

            if(user == null || !_passwordHasher.PasswordMatches(password, user.Password))
            {
                return new BaseResponse<AccessToken>("Invalid credentials");
            }

            var token = _tokenHandler.CreateAccessToken(user);

            return new BaseResponse<AccessToken>(token);
        }

        public async Task<BaseResponse<AccessToken>> RefreshToken(string refreshToken, string username)
        {
            var token = _tokenHandler.TakeRefreshToken(refreshToken);

            if(token == null)
            {
                return new BaseResponse<AccessToken>("Invalid refresh token");
            }

            if(token.IsExpired())
            {
                return new BaseResponse<AccessToken>("Expired refresh token");
            }

            var user = await _userService.FindFirstOrDefault(u => u.Username.Equals(username));

            if(user == null)
            {
                return new BaseResponse<AccessToken>("Invalid credentials");
            }

            var accessToken = _tokenHandler.CreateAccessToken(user);

            return new BaseResponse<AccessToken>(accessToken);
        }

        public void RevokeRefreshToken(string refreshToken)
        {
            _tokenHandler.RevokeRefreshToken(refreshToken);
        }
    }
}
