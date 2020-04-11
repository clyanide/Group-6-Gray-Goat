using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Interfaces;
using Bangershare_Backend.Models;
using Bangershare_Backend.Services.Communications;

namespace Bangershare_Backend.Services
{
    public class PlaylistService : BaseService<BangerShareContext, Playlist, IRepository<Playlist>, BaseResponse<Playlist>, IUnitOfWork>
    {
        private readonly UserService _userService;
        private readonly IRepository<UserPlaylist> _userPlaylistRepository;
        private readonly IUnitOfWork _unitOfWork;
        public PlaylistService(UserService userService, IRepository<Playlist> playlistRepository, IRepository<UserPlaylist> userPlaylistRepository, IUnitOfWork unitOfWork) : base(playlistRepository, unitOfWork)
        {
            _userService = userService;
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
            } 
            catch(Exception e)
            {
                return new BaseResponse<Playlist>($"An error occurred when adding the playlist: {e.Message}");
            }
        }

        public async Task<ICollection<Playlist>> GetPlaylistsForUser(int userId)
        {
            var userPlaylists = await _userPlaylistRepository.Get(u => u.UserId.Equals(userId));

            var playlists = await GetAll();

            playlists = (from p in playlists
                         join u in userPlaylists on p.Id equals u.PlaylistId
                         select p).ToList();

            return playlists;
        }

        public async Task<BaseResponse<Playlist>> DeletePlaylist(int userId, int playlistId)
        {
            var userPlaylistResponse = await UserPlaylistChecker(userId, playlistId);

            if (!userPlaylistResponse.Success)
            {
                return new BaseResponse<Playlist>(userPlaylistResponse.Message);
            }

            var userPlaylists = await _userPlaylistRepository.Get(u => u.PlaylistId.Equals(playlistId));

            try
            {
                // Deletes entries of all users following that playlist
                foreach(UserPlaylist userPlaylist in userPlaylists)
                {
                    _userPlaylistRepository.Delete(userPlaylist);
                    await _unitOfWork.CompleteAsync();
                }

                var playlistResponse = await Delete(playlistId);

                return playlistResponse;
            } catch(Exception e)
            {
                return new BaseResponse<Playlist>($"An error occurred when deleting the playlist: {e.Message}");
            }
        }

        public async Task<BaseResponse<Playlist>> UpdatePlaylist(int userId, int playlistId, Playlist playlist)
        {
            var userPlaylistResponse = await UserPlaylistChecker(userId, playlistId);

            if (!userPlaylistResponse.Success)
            {
                return new BaseResponse<Playlist>(userPlaylistResponse.Message);
            }

            var playlistResponse = await Update(playlist, playlistId);

            return playlistResponse;
        }

        public async Task<BaseResponse<Playlist>> FollowPlaylist(int userId, int playlistId)
        {
            var userPlaylist = await _userPlaylistRepository.GetByKey(userId, playlistId);

            if(userPlaylist != null)
            {
                return new BaseResponse<Playlist>("User already follows playlist");
            }

            var playlist = await GetByKeys(playlistId);

            if (playlist == null)
            {
                return new BaseResponse<Playlist>("Playlist does not exist");
            }

            var user = await _userService.GetByKeys(userId);

            userPlaylist = new UserPlaylist
            {
                PlaylistId = playlistId,
                Playlist = playlist,
                UserId = userId,
                User = user,
                IsOwner = false
            };

            try
            {
                await _userPlaylistRepository.Add(userPlaylist);
                await _unitOfWork.CompleteAsync();

                return new BaseResponse<Playlist>(playlist);
            }
            catch (Exception e)
            {
                return new BaseResponse<Playlist>($"An error occurred when adding a user to the playlist: {e.Message}");
            }
        }

        public async Task<BaseResponse<Playlist>> UnfollowPlaylist(int userId, int playlistId)
        {
            var userPlaylist = await _userPlaylistRepository.GetByKey(userId, playlistId);

            if(userPlaylist == null)
            {
                return new BaseResponse<Playlist>("User does not follow playlist");
            }

            var playlist = await GetByKeys(playlistId);

            if(playlist == null)
            {
                return new BaseResponse<Playlist>("Playlist does not exist");
            }

            try
            {
                _userPlaylistRepository.Delete(userPlaylist);
                await _unitOfWork.CompleteAsync();

                var userPlaylists = await _userPlaylistRepository.Get(u => u.PlaylistId.Equals(playlistId));
                
                // Deletes the playlist when it reaches 0 followers
                if (userPlaylists.Count == 0)
                {
                    var response = await Delete(playlistId);

                    return response;
                }

                return new BaseResponse<Playlist>(playlist);
            } 
            catch(Exception e)
            {
                return new BaseResponse<Playlist>($"An error occurred when removing a user to the playlist: {e.Message}");
            }
        }

        private async Task<BaseResponse<UserPlaylist>> UserPlaylistChecker(int userId, int playlistId)
        {
            var userPlaylist = await _userPlaylistRepository.GetByKey(userId, playlistId);

            if (userPlaylist == null)
            {
                return new BaseResponse<UserPlaylist>("Playlist for user does not exist");
            }
            else if (!userPlaylist.IsOwner)
            {
                return new BaseResponse<UserPlaylist>("User does not have permission to delete playlist");
            } else
            {
                return new BaseResponse<UserPlaylist>(userPlaylist);
            }
        }
    }
}
