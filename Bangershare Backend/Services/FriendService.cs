using Bangershare_Backend.Interfaces;
using Bangershare_Backend.Models;
using Bangershare_Backend.Repositories;
using Bangershare_Backend.Services.Communications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Services
{
    public class FriendService : BaseService<BangerShareContext, Friend, FriendRepository, BaseResponse<Friend>, IUnitOfWork>
    {
        private readonly FriendRepository _friendRepository;
        private readonly UserService _userService;

        public FriendService(FriendRepository friendRepository, UserService userService, IUnitOfWork unitOfWork) : base(friendRepository, unitOfWork)
        {
            _friendRepository = friendRepository;
            _userService = userService;
        }


    }
}
