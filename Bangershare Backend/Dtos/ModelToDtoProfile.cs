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
            CreateMap<PlaylistSong, PlaylistSongDto>();
            CreateMap<RefreshToken, RefreshTokenDto>();
            CreateMap<AccessToken, AccessTokenDto>()
                .ForMember(a => a.AccessToken, opt => opt.MapFrom(a => a.Token))
                .ForMember(a => a.RefreshToken, opt => opt.MapFrom(a => a.RefreshToken.Token))
                .ForMember(a => a.Expiration, opt => opt.MapFrom(a => a.Expiration));
            CreateMap<Friend, FriendDto>()
                .ForMember(a => a.FriendType, opt => opt.MapFrom(a => a.FriendType))
                .ForMember(a => a.SenderUsername, opt => opt.MapFrom(a => a.Sender.Username))
                .ForMember(a => a.ReceiverUsername, opt => opt.MapFrom(a => a.Receiver.Username));
            CreateMap<FriendSong, FriendSongDto>()
                .ForMember(a => a.Username, opt => opt.MapFrom(a => a.Username))
                .ForMember(a => a.PlaylistSongs, opt => opt.MapFrom(a => a.PlaylistSongs));
            CreateMap<UserFriends, UserFriendsDto>();

            CreateMap<UserDto, User>();
            CreateMap<SongDto, Song>();
            CreateMap<PlaylistDto, Playlist>();
            CreateMap<AccessTokenDto, AccessToken>();
        }
    }
}
