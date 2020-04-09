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
        private readonly IRepository<User> _userRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IPasswordHasher _passwordHasher;

        public UserService(IRepository<User> userRepository, IUnitOfWork unitOfWork, IPasswordHasher passwordHasher) : base(userRepository, unitOfWork) 
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
            _passwordHasher = passwordHasher;
        }

        public async Task<BaseResponse<User>> CreateUser(User user)
        {
            var existingUser = await _userRepository.FindFirstOrDefault(e => e.Username.Equals(user.Username));

            if(existingUser != null)
            {
                return new BaseResponse<User>("Username already in use");
            }

            existingUser = await _userRepository.FindFirstOrDefault(e => e.Email.Equals(user.Email));

            if(existingUser != null)
            {
                return new BaseResponse<User>("Email already in use");
            }

            user.Password = _passwordHasher.HashPassword(user.Password);

            await _userRepository.Add(user);
            await _unitOfWork.CompleteAsync();

            return new BaseResponse<User>(user);
        }
    }
}
