using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Dtos
{
    public class RefreshTokenDto
    {
        public string Token { get; set; }
        public string Username { get; set; }
    }
}
