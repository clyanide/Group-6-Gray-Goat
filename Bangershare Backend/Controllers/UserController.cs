using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Bangershare_Backend.Dtos;
using Bangershare_Backend.Models;
using AutoMapper;
using Bangershare_Backend.Services;
using Bangershare_Backend.Interfaces;
using Bangershare_Backend.Models.Security;
using Microsoft.AspNetCore.Authorization;
using Bangershare_Backend.Helpers;

namespace Bangershare_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly UserService _userService;
        private readonly IAuthenticationService _authenticationService;

        public UserController(IMapper mapper, UserService userService, IAuthenticationService authenticationService)
        {
            _mapper = mapper;
            _userService = userService;
            _authenticationService = authenticationService;
        }


        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUserInfo()
        {
            int userId = ClaimHelper.FindNameIdentifier(HttpContext.User.Claims);

            var result =await _userService.GetByKeys(userId);

            if(result == null)
            {
                return NotFound("User not found");
            }

            UserDto userDto = _mapper.Map<User, UserDto>(result);

            return Ok(userDto);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserDto userDto)
        {
            var user = _mapper.Map<UserDto, User>(userDto);

            var response = await _userService.CreateUser(user);

            if(!response.Success)
            {
                return BadRequest(response.Message);
            }

            userDto = _mapper.Map<User, UserDto>(response.Resource);

            return Ok(userDto);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserDto userDto)
        {
            var response = await _authenticationService.CreateAccessToken(userDto.Username, userDto.Password);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            var accessTokenDto = _mapper.Map<AccessToken, AccessTokenDto>(response.Resource);

            return Ok(accessTokenDto);
        }

        [HttpPost("token/refresh")]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenDto refreshTokenDto)
        {
            var response = await _authenticationService.RefreshToken(refreshTokenDto.Token, refreshTokenDto.Username);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            var accessTokenDto = _mapper.Map<AccessToken, AccessTokenDto>(response.Resource);

            return Ok(accessTokenDto);
        }

        [HttpPost("token/revoke")]
        public IActionResult RevokeToken([FromBody] RevokeTokenDto revokeTokenDto)
        {
            _authenticationService.RevokeRefreshToken(revokeTokenDto.Token);

            return NoContent();
        }
    }
}