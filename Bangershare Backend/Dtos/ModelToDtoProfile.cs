using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Models;
using Bangershare_Backend.Dtos;

namespace Bangershare_Backend.Dtos
{
    public class ModelToDtoProfile : Profile
    {
        public ModelToDtoProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<Song, SongDto>();
            CreateMap<Playlist, PlaylistDto>();

            CreateMap<UserDto, User>();
            CreateMap<SongDto, Song>();
            CreateMap<PlaylistDto, Playlist>();
        }
    }
}
