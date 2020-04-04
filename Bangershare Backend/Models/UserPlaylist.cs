using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Models
{
    public class UserPlaylist
    {
        public int UserId { get; set; }
        public int PlaylistId { get; set; }
        public bool IsOwner { get; set; }
        public virtual User User { get; set; }
        public virtual Playlist Playlist { get; set; }
    }
}
