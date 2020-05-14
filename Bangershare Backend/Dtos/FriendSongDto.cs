using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Dtos
{

    public class FriendSongDto
    {
        public string Username { get; set; }

        public ICollection<PlaylistSongDto> PlaylistSongs { get; set; }
    }
}
