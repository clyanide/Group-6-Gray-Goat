﻿using Bangershare_Backend.Interfaces;
using Bangershare_Backend.Models;
using Bangershare_Backend.Repositories;
using Bangershare_Backend.Services.Communications;
using Microsoft.EntityFrameworkCore;
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
        private readonly PlaylistService _playlistService;
        private readonly IUnitOfWork _unitOfWork;

        public FriendService(FriendRepository friendRepository,
                             UserService userService,
                             PlaylistService playlistService,
                             IUnitOfWork unitOfWork) : base(friendRepository, unitOfWork)
        {
            _friendRepository = friendRepository;
            _userService = userService;
            _playlistService = playlistService;
            _unitOfWork = unitOfWork;
        }

        public async Task<BaseResponse<Friend>> AddFriendRequest(int senderId, string receiverUsername)
        {
            Friend friendRequest = await CheckRequestExists(senderId, receiverUsername);

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
            Friend friendRequest = await FindFirstOrDefault(filter: f => f.Sender.Username.Equals(senderUsername) && f.Receiver.Username.Equals(receiverUsername),
                                                            include: source => source.Include(f => f.Sender).Include(f => f.Receiver));

            if (friendRequest == null)
            {
                return new BaseResponse<Friend>("Friend request does not exist");
            }

            if (friendRequest.ReceiverId != userId)
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

        public async Task<BaseResponse<Friend>> DeleteFriendRequest(int userId, string friendUsername)
        {
            Friend friend = await CheckRequestExists(userId, friendUsername);

            if(friend == null)
            {
                return new BaseResponse<Friend>("Two users have no relations");
            }

            return await Delete(friend.SenderId, friend.ReceiverId);
        }

        public async Task<BaseResponse<UserFriends>> GetFriends(int userId)
        {
            User user = await _userService.FindFirstOrDefault(filter: u => u.Id.Equals(userId),
                                                              include: source => source
                                                                .Include(u => u.Sent)
                                                                .ThenInclude(s => s.Receiver)
                                                                .Include(u => u.Receieved)
                                                                .ThenInclude(r => r.Sender));

            // finds all friend requests from sent and received 
            List<Friend> friends = user.Sent.Where(s => s.FriendType.Equals(FriendType.Friend))
                                            .Concat(user.Receieved.Where(r => r.FriendType.Equals(FriendType.Friend)))
                                            .ToList();

            List<Friend> pendingFriends = user.Receieved.Where(r => r.FriendType.Equals(FriendType.Pending)).ToList();

            List<Friend> sentRequests = user.Sent.Where(r => r.FriendType.Equals(FriendType.Pending)).ToList();
          
            List<FriendSong> friendSongs = new List<FriendSong>();


            foreach(Friend friend in friends)
            {
                // gets the other users id
                User otherUser = friend.SenderId != userId ? friend.Sender : friend.Receiver;

                FriendSong friendSong = new FriendSong { Username = otherUser.Username };

                friendSong.PlaylistSongs = await _playlistService.GetPlaylistUserOwns(otherUser.Id, userId);

                friendSongs.Add(friendSong);
            }

            UserFriends userFriends = new UserFriends
            {
                FriendSongs = friendSongs,
                PendingFriends = pendingFriends,
                SentRequests = sentRequests
            };

            return new BaseResponse<UserFriends>(userFriends);
        }

        private async Task<Friend> CheckRequestExists(int id, string username)
        {
            // checks whether a friend request exists between a user trying both combinations of them as the sender or receiver
            return await FindFirstOrDefault(
                f => (f.SenderId.Equals(id) && f.Receiver.Username.Equals(username)) || f.Sender.Username.Equals(username) && f.Receiver.Id.Equals(id),
                include: source => source.Include(s => s.Receiver).Include(s => s.Sender));
        }
    }
}
