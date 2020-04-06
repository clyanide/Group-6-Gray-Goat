using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Bangershare_Backend.Interfaces;
using Bangershare_Backend.Services.Communications;
using Bangershare_Backend.Models;

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
        private readonly IService<User, BaseResponse<User>> _userService;
        public WeatherForecastController(ILogger<WeatherForecastController> logger, IService<User, BaseResponse<User>> userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Add(User user)
        {
            var response = await _userService.Add(user);

            if (!response.Success)
            {
                return BadRequest(response.Message);
            }

            return Ok(user);
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
            var user = await _userService.Get(id);

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
