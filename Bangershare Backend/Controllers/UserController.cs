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

namespace Bangershare_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly UserService _userService;
        private readonly IAuthenticationService _authenticationService;

        public UserController(IMapper mapper, UserService userService)
        {
            _mapper = mapper;
            _userService = userService;
        }

        [HttpPost("/register")]
        public async Task<IActionResult> CreateUser([FromBody] UserDto userDto)
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

        [HttpPost("/login")]
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
    }
}