using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Bangershare_Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Bangershare_Backend.Dtos;
using Bangershare_Backend.Models;
using Bangershare_Backend.Helpers;

namespace Bangershare_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PlaylistController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly PlaylistService _playlistService;

        public PlaylistController(IMapper mapper, PlaylistService playlistService)
        {
            _mapper = mapper;
            _playlistService = playlistService;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePlaylist([FromBody] PlaylistDto playlistDto)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var playlist = _mapper.Map<PlaylistDto, Playlist>(playlistDto);

            var response = await _playlistService.CreatePlaylist(userId, playlist);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            playlistDto = _mapper.Map<Playlist, PlaylistDto>(response.Resource);

            return Ok(playlistDto);
        }

        [HttpGet]
        public async Task<IActionResult> GetPlaylistForUser()
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var playlistSongs = await _playlistService.GetPlaylistsForUser(userId);

            if(playlistSongs.Count == 0)
            {
                return NotFound("No playlists for user");
            }

            var playlistsDto = _mapper.Map<ICollection<PlaylistSong>, ICollection<PlaylistSongDto>>(playlistSongs);

            return Ok(playlistsDto);
        }

        [HttpDelete("{playlistId}")]
        public async Task<IActionResult> DeletePlaylist([FromRoute] int playlistId)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var response = await _playlistService.DeletePlaylist(userId, playlistId);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            var playlistDto = _mapper.Map<Playlist, PlaylistDto>(response.Resource);

            return Ok(playlistDto);
        }

        [HttpPut("{playlistId}")]
        public async Task<IActionResult> UpdatePlaylist([FromRoute] int playlistId, [FromBody] PlaylistDto playlistDto)
        {
            if(playlistId != playlistDto.Id)
            {
                return BadRequest("ID's of playlist don't match");
            }

            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var playlist = _mapper.Map<PlaylistDto, Playlist>(playlistDto);

            var response = await _playlistService.UpdatePlaylist(userId, playlistId, playlist);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            playlistDto = _mapper.Map<Playlist, PlaylistDto>(response.Resource);

            return Ok(playlistDto);
        }

        [HttpPost("follow/{playlistId}")]
        public async Task<IActionResult> FollowPlaylist([FromRoute] int playlistId)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var response = await _playlistService.FollowPlaylist(userId, playlistId);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            var playlistDto = _mapper.Map<Playlist, PlaylistDto>(response.Resource);

            return Ok(playlistDto);
        }

        [HttpDelete("unfollow/{playlistId}")]
        public async Task<IActionResult> UnfollowPlaylist([FromRoute] int playlistId)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var response = await _playlistService.UnfollowPlaylist(userId, playlistId);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            var playlistDto = _mapper.Map<Playlist, PlaylistDto>(response.Resource);

            return Ok(playlistDto);
        }
    }
}