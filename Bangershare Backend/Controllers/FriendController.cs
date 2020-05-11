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
    public class FriendController : ControllerBase
    {
        private readonly FriendService _friendService;
        private readonly IMapper _mapper;
        
        public FriendController(FriendService friendService, IMapper mapper)
        {
            _friendService = friendService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> AddFriendRequest([FromQuery] string username)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var response = await _friendService.AddFriendRequest(userId, username);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            var friendDto = _mapper.Map<Friend, FriendDto>(response.Resource);

            return Ok(friendDto);
        }

        [HttpPut]
        public async Task<IActionResult> AcceptFriendRequest([FromBody] FriendDto friendDto)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var response = await _friendService.UpdateFriendRequest(friendDto.SenderUsername,
                                                                    friendDto.ReceiverUsername,
                                                                    FriendType.Friend,
                                                                    userId);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            friendDto = _mapper.Map<Friend, FriendDto>(response.Resource);

            return Ok(friendDto);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteFriendRequest([FromBody] FriendDto friendDto)
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var response = await _friendService.DeleteFriendRequest(friendDto.SenderUsername, friendDto.ReceiverUsername, userId);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            friendDto = _mapper.Map<Friend, FriendDto>(response.Resource);

            return Ok(friendDto);
        }
    }
}