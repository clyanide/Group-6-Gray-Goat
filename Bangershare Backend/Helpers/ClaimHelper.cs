using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Bangershare_Backend.Helpers
{
    public class ClaimHelper
    {
        public static int FindNameIdentifier(IEnumerable<Claim> claims)
        {
            return int.Parse(claims.FirstOrDefault(c => c.Type.Equals(ClaimTypes.NameIdentifier)).Value);
        }
    }
}
