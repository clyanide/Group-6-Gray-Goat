using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Models;
using Bangershare_Backend.Models.Security;

namespace Bangershare_Backend.Dtos
{
    public class ModelToDtoProfile : Profile
    {
        public ModelToDtoProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<Song, SongDto>();
            CreateMap<Playlist, PlaylistDto>();
            CreateMap<RefreshToken, RefreshTokenDto>();
            CreateMap<AccessToken, AccessTokenDto>()
                .ForMember(a => a.AccessToken, opt => opt.MapFrom(a => a.Token))
                .ForMember(a => a.RefreshToken, opt => opt.MapFrom(a => a.RefreshToken.Token))
                .ForMember(a => a.Expiration, opt => opt.MapFrom(a => a.Expiration));

            CreateMap<UserDto, User>();
            CreateMap<SongDto, Song>();
            CreateMap<PlaylistDto, Playlist>();
            CreateMap<AccessTokenDto, AccessToken>();
        }
    }
}
