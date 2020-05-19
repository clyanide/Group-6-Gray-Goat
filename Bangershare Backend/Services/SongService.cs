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
        private readonly SpotifyAPIService _spotifyAPIService;
        private readonly YoutubeAPIService _youtubeAPIService;
        private readonly IRepository<UserPlaylist> _userPlaylistRepository;
        private readonly IUnitOfWork _unitOfWork;
        
        public SongService(SongRepository songRepository,
                           PlaylistService playlistService,
                           SpotifyAPIService spotifyAPIService,
                           YoutubeAPIService youtubeAPIService,
                           IRepository<UserPlaylist> userPlaylistRepository,
                           IUnitOfWork unitOfWork) : base(songRepository, unitOfWork)
        {
            _songRepository = songRepository;
            _playlistService = playlistService;
            _spotifyAPIService = spotifyAPIService;
            _youtubeAPIService = youtubeAPIService;
            _userPlaylistRepository = userPlaylistRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<BaseResponse<Song>> AddSpotifySongToPlaylist(int userId, int playlistId, string spotifySongId)
        {
            var result = await _spotifyAPIService.getSpotifySongInformation(spotifySongId);

            if (!result.Success)
            {
                return result;
            }

            return await AddSongToPlaylist(userId, playlistId, result.Resource);
        }

        public async Task<BaseResponse<Song>> AddYoutubeVideoToPlaylist(int userId, int playlistId, string youtubeId, Song song)
        {
            var result = await _youtubeAPIService.getYoutubeVideoInfo(youtubeId, song);

            if (!result.Success)
            {
                return result;
            }

            return await AddSongToPlaylist(userId, playlistId, result.Resource);
        }
        public async Task<BaseResponse<Song>> AddSongToPlaylist(int userId, int playlistId, Song song)
        {
            var playlist = await _playlistService.GetByKeys(playlistId);

            if(playlist == null)
            {
                return new BaseResponse<Song>("Playlist does not exist");
            }

            var userPlaylist = await _userPlaylistRepository.GetByKeys(userId, playlistId);

            if(userPlaylist == null)
            {
                return new BaseResponse<Song>("User does not follow playlist");
            }

            // Only the owner of a playlist can directly add a song to a playlist
            if(userPlaylist.IsOwner)
            {
                song.IsPending = false;
            } 
            else
            {
                song.IsPending = true;
            }
            
            song.Hearts = 0;
            song.PlaylistId = playlistId;
            song.Playlist = playlist;

            var response = await Add(song);

            return response;
        }

        public async Task<BaseResponse<Song>> DeleteSongFromPlaylist(int userId, int playlistId, int songId)
        {
            var playlist = await _playlistService.GetByKeys(playlistId);

            if (playlist == null)
            {
                return new BaseResponse<Song>("Playlist does not exist");
            }

            var userPlaylist = await _userPlaylistRepository.GetByKeys(userId, playlistId);

            if (userPlaylist == null)
            {
                return new BaseResponse<Song>("User does not follow playlist");
            } 
            else if (!userPlaylist.IsOwner)
            {
                return new BaseResponse<Song>("User does not have permission to remove songs");
            }

            var song = await GetByKeys(songId);

            if(song == null)
            {
                return new BaseResponse<Song>("Song does not exist");
            } 
            else if(song.PlaylistId != playlistId)
            {
                return new BaseResponse<Song>("Song does not belong in playlist");
            }

            var response = await Delete(songId);

            return response;
        }

        public async Task<BaseResponse<Song>> UpdateSong(int songId, Song song)
        {
            var existingSong = await GetByKeys(songId);

            if(existingSong == null)
            {
                return new BaseResponse<Song>("Song does not exist");
            }

            existingSong.Artist = song.Artist;
            existingSong.Hearts = song.Hearts;
            existingSong.IsPending = song.IsPending;
            existingSong.Link = song.Link;
            existingSong.Name = song.Name;
            existingSong.SongType = song.SongType;

            try
            {
                _songRepository.UpdateSong(existingSong);
                await _unitOfWork.CompleteAsync();

                return new BaseResponse<Song>(existingSong);
            }
            catch(Exception e)
            {
                return new BaseResponse<Song>($"An error occurred when updating the song: {e.Message}");
            }
        }
    }
}
