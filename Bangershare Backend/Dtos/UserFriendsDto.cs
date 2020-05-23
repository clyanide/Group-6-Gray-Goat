using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Dtos
{
    public class UserFriendsDto
    {
        public ICollection<FriendSongDto> FriendSongs { get; set; }
        public ICollection<FriendDto> PendingFriends { get; set; }
        public ICollection<FriendDto> SentRequests { get; set; }
    }
}
