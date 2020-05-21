using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Dtos
{
    public class PlaylistSongDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsOwner { get; set; }
        public string Creator { get; set; }
        public bool Following { get; set; }

        public ICollection<SongDto> Songs { get; set; }
    }
}
