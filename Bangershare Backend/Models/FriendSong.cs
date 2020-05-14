using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Models
{
    public class FriendSong
    {
        public string Username { get; set; }

        public ICollection<PlaylistSong> PlaylistSongs { get; set; }
    }
}
