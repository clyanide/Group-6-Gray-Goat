using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Dtos
{
    public class UserFriendsDto
    {
        public ICollection<FriendDto> AcceptedFriends { get; set; }
        public ICollection<PlaylistSongDto> AcceptedFriendSongs { get; set; }
        public ICollection<FriendDto> PendingFriends { get; set; }
    }
}
