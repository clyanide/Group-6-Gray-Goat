using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Services.Communications;
using Bangershare_Backend.Models.Security;

namespace Bangershare_Backend.Interfaces
{
    public interface IAuthenticationService
    {
        Task<BaseResponse<AccessToken>> CreateAccessToken(string username, string password);
        Task<BaseResponse<AccessToken>> RefreshToken(string refreshToken, string username);
        void RevokeRefreshToken(string refreshToken);
    }
}
