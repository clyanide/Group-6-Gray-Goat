using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Models;
using Bangershare_Backend.Interfaces;
using Bangershare_Backend.Repositories;
using Bangershare_Backend.Services.Communications;

namespace Bangershare_Backend.Services
{
    public class SongService : BaseService<BangerShareContext, Song, SongRepository, BaseResponse<Song>, IUnitOfWork>
    {
        private readonly SongRepository _songRepository;
        private readonly PlaylistService _playlistService;
        private readonly IRepository<UserPlaylist> _userPlaylistRepository;
        private readonly IUnitOfWork _unitOfWork;
        
        public SongService(SongRepository songRepository, PlaylistService playlistService, IRepository<UserPlaylist> userPlaylistRepository, IUnitOfWork unitOfWork) : base(songRepository, unitOfWork)
        {
            _songRepository = songRepository;
            _playlistService = playlistService;
            _userPlaylistRepository = userPlaylistRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<BaseResponse<Song>> AddSongToPlaylist(int userId, int playlistId, Song song)
        {
            var playlist = await _playlistService.GetByKeys(playlistId);

            if(playlist == null)
            {
                return new BaseResponse<Song>("Playlist does not exist");
            }

            var userPlaylist = await _userPlaylistRepository.GetByKey(userId, playlistId);

            if(userPlaylist == null)
            {
                return new BaseResponse<Song>("User does not follow playlist");
            }

            // Only the owner of a playlist can directly add a song to a playlist
            if(userPlaylist.IsOwner)
            {
                song.IsPending = false;
            } else
            {
                song.IsPending = true;
            }

            song.PlaylistId = playlistId;
            song.Playlist = playlist;
            song.Hearts = 0;

            var response = await Add(song);

            return response;
        }
    }
}
