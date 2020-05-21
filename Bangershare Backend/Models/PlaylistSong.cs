using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Models
{
    public class PlaylistSong
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsOwner { get; set; }
        public string Creator { get; set; }
        public bool Following { get; set; }
        public ICollection<Song> Songs { get; set; }

        public PlaylistSong(string username, Playlist playlist, bool isOwner, bool following)
        {
            Id = playlist.Id;
            Name = playlist.Name;
            IsOwner = isOwner;
            Creator = username;
            Songs = playlist.Songs;
            Following = following;
        }
    }
}
