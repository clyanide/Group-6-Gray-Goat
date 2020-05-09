using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Models.Security
{
    public class SpotifyToken
    {
        public string access_token { get; set; }
        public string token_type { get; set; }
        public long expires_in { get; set; }
    }
}
