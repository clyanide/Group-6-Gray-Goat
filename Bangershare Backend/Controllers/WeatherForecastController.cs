using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Bangershare_Backend.Interfaces;
using Bangershare_Backend.Services.Communications;
using Bangershare_Backend.Models;
using Bangershare_Backend.Dtos;
using AutoMapper;
using Bangershare_Backend.Services;

namespace Bangershare_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly UserService _userService;
        private readonly IMapper _mapper;
        public WeatherForecastController(ILogger<WeatherForecastController> logger, UserService userService, IMapper mapper)
        {
            _logger = logger;
            _userService = userService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> Add(UserDto userDto)
        {
            var user = _mapper.Map<UserDto, User>(userDto);

            var response = await _userService.Add(user);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            userDto = _mapper.Map<User, UserDto>(response.Resource);

            return Ok(userDto);
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _userService.GetAll();

            if(users.Count == 0)
            {
                return NotFound();
            }

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await _userService.GetByKeys(id);

            if(user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            var response = await _userService.Delete(id);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            return Ok(response.Resource);
        }

        [HttpPut]
        public async Task<IActionResult> Update(int id, User user)
        {
            var response = await _userService.Update(user, id);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            return Ok(user);
        }
    }
}
