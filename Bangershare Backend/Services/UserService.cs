using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Models;
using Bangershare_Backend.Repositories;
using Bangershare_Backend.Services.Communications;
using Bangershare_Backend.Interfaces;

namespace Bangershare_Backend.Services
{
    public class UserService : BaseService<BangerShareContext, User, IRepository<User>, BaseResponse<User>, IUnitOfWork>
    {
        public UserService(IRepository<User> userRepository, IUnitOfWork unitOfWork) : base(userRepository, unitOfWork) { }
    }
}
