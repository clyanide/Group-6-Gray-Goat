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
    }
}