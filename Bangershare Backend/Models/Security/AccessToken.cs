using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Models.Security
{
    public class AccessToken : JsonWebToken
    {
        public RefreshToken RefreshToken { get; set; }

        public AccessToken(string token, long expiration, RefreshToken refreshToken) : base(token, expiration)
        {
            if (refreshToken == null)
                throw new ArgumentException("Specify a valid refresh token.");

            RefreshToken = refreshToken;
        }
    }
}
