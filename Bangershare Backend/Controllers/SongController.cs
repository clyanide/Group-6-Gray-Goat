using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Bangershare_Backend.Dtos;
using Bangershare_Backend.Helpers;
using Bangershare_Backend.Models;
using Bangershare_Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bangershare_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SongController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly SongService _songService;

        public SongController(IMapper mapper, SongService songService)
        {
            _mapper = mapper;
            _songService = songService;
        }
        
        [HttpPost]
        public async Task<IActionResult> AddSongToPlaylist([FromQuery] int playlistId, [FromBody] SongDto songDto)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var song = _mapper.Map<SongDto, Song>(songDto);

            var response = await _songService.AddSongToPlaylist(userId, playlistId, song);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            songDto = _mapper.Map<Song, SongDto>(response.Resource);

            return Ok(songDto);
        }

        [HttpPost("spotify")]
        public async Task<IActionResult> AddSpotifySongToPlaylist([FromQuery] int playlistId, [FromQuery] string spotifySongId)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var response = await _songService.AddSpotifySongToPlaylist(userId, playlistId, spotifySongId);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            SongDto songDto = _mapper.Map<Song, SongDto>(response.Resource);

            return Ok(songDto);
        }

        [HttpPost("youtube")]
        public async Task<IActionResult> AddYoutuubeVideoToPlaylist([FromQuery] int playlistId, [FromQuery] string youtubeId, [FromBody] SongDto songDto)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            Song song = _mapper.Map<SongDto, Song>(songDto);

            var response = await _songService.AddYoutubeVideoToPlaylist(userId, playlistId, youtubeId, song);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            songDto = _mapper.Map<Song, SongDto>(response.Resource);

            return Ok(songDto);
        }

        [HttpDelete("{songId}")]
        public async Task<IActionResult> DeleteSongFromPlaylist([FromRoute] int songId, [FromQuery] int playlistId)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var response = await _songService.DeleteSongFromPlaylist(userId, playlistId, songId);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            var songDto = _mapper.Map<Song, SongDto>(response.Resource);

            return Ok(songDto);
        }

        [HttpPut("{songId}")]
        public async Task<IActionResult> UpdateSong([FromRoute] int songId, [FromBody] SongDto songDto)
        {
            if(songDto.Id != songId)
            {
                return BadRequest("ID of songs, don't match");
            }

            var song = _mapper.Map<SongDto, Song>(songDto);

            var response = await _songService.UpdateSong(songId, song);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            return Ok(songDto);
        }
    }
}