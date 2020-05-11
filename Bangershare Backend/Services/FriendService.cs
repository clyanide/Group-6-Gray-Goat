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
        private readonly IUnitOfWork _unitOfWork;

        public FriendService(FriendRepository friendRepository, UserService userService, IUnitOfWork unitOfWork) : base(friendRepository, unitOfWork)
        {
            _friendRepository = friendRepository;
            _userService = userService;
            _unitOfWork = unitOfWork;
        }

        public async Task<BaseResponse<Friend>> AddFriendRequest(int senderId, string receiverUsername)
        {
            Friend friendRequest = await FindFirstOrDefault(f => f.SenderId.Equals(senderId) && f.Receiver.Username.Equals(receiverUsername));

            if(friendRequest != null)
            {
                return new BaseResponse<Friend>("Friend request already exists between users");
            }

            User receiver = await _userService.FindFirstOrDefault(u => u.Username.Equals(receiverUsername));

            if(receiver == null)
            {
                return new BaseResponse<Friend>("Username does not exist");
            }

            User sender = await _userService.GetByKeys(senderId);

            friendRequest = new Friend 
            { 
                Sender = sender, 
                SenderId = sender.Id, 
                Receiver = receiver, 
                ReceiverId = receiver.Id, 
                FriendType = FriendType.Pending 
            };

            return await Add(friendRequest);
        }

        public async Task<BaseResponse<Friend>> UpdateFriendRequest(string senderUsername, string receiverUsername, FriendType friendType, int userId)
        {
            Friend friendRequest = await FindFirstOrDefault(f => f.Sender.Username.Equals(senderUsername) && f.Receiver.Username.Equals(receiverUsername), "Sender,Receiver");

            if (friendRequest == null)
            {
                return new BaseResponse<Friend>("Friend request does not exist");
            }

            if (friendRequest.ReceiverId != userId || friendRequest.SenderId != userId)
            {
                return new BaseResponse<Friend>("User does not have permission to access friend request");
            }

            friendRequest.FriendType = friendType;

            try
            {
                _friendRepository.UpdateFriendRequest(friendRequest);
                await _unitOfWork.CompleteAsync();

                return new BaseResponse<Friend>(friendRequest);
            }
            catch (Exception e)
            {
                return new BaseResponse<Friend>($"An error occurred when updating friend request: {e.Message}");
            }
        }

        public async Task<BaseResponse<Friend>> DeleteFriendRequest(string senderUsername, string receiverUsername, int userId)
        {
            User sender = await _userService.FindFirstOrDefault(u => u.Username.Equals(senderUsername));
            
            if (sender == null)
            {
                return new BaseResponse<Friend>("Sender not found");
            }

            User receiver = await _userService.FindFirstOrDefault(u => u.Username.Equals(receiverUsername));

            if (receiver == null)
            {
                return new BaseResponse<Friend>("Receiver does not exist");
            }

            if(sender.Id != userId || receiver.Id != userId)
            {
                return new BaseResponse<Friend>("User does not have permission to delete friend request");
            }

            return await Delete(sender.Id, receiver.Id);
        }
    }
}
