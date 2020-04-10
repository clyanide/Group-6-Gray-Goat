using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Interfaces;
using Bangershare_Backend.Models;
using Bangershare_Backend.Repositories;
using Bangershare_Backend.Services.Communications;

namespace Bangershare_Backend.Services
{
    public class PlaylistService : BaseService<BangerShareContext, Playlist, IRepository<Playlist>, BaseResponse<Playlist>, IUnitOfWork>
    {
        private readonly UserService _userService;
        private readonly IRepository<Playlist> _playlistRepository;
        private readonly IRepository<UserPlaylist> _userPlaylistRepository;
        private readonly IUnitOfWork _unitOfWork;
        public PlaylistService(UserService userService, IRepository<Playlist> playlistRepository, IRepository<UserPlaylist> userPlaylistRepository, IUnitOfWork unitOfWork) : base(playlistRepository, unitOfWork)
        {
            _userService = userService;
            _playlistRepository = playlistRepository;
            _userPlaylistRepository = userPlaylistRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<BaseResponse<Playlist>> CreatePlaylist(int userId, Playlist playlist)
        {
            var response = await Add(playlist);

            if (!response.Success)
            {
                return response;
            }

            var user = await _userService.GetByKeys(userId);

            UserPlaylist userPlaylist = new UserPlaylist
            {
                PlaylistId = response.Resource.Id,
                Playlist = response.Resource,
                UserId = userId,
                User = user,
                IsOwner = true
            };

            try
            {
                await _userPlaylistRepository.Add(userPlaylist);
                await _unitOfWork.CompleteAsync();

                return response;
            } catch(Exception e)
            {
                return new BaseResponse<Playlist>($"An error occurred when adding the playlist: {e.Message}");
            }
        }
    }
}
