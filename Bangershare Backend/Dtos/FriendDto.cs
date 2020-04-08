using Bangershare_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Dtos
{
    public class FriendDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public FriendType FriendType { get; set; }
        public ICollection<PlaylistDto> Playlists { get; set; }
    }
}
