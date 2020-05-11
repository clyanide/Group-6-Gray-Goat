using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Models
{
    public class UserFriends
    {
        public ICollection<Friend> AcceptedFriends { get; set; }
        public ICollection<PlaylistSong> AcceptedFriendSongs { get; set; }
        public ICollection<Friend> PendingFriends { get; set; }
    }
}
