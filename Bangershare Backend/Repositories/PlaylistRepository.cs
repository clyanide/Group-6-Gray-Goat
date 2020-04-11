using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Models;

namespace Bangershare_Backend.Repositories
{
    public class PlaylistRepository : BaseRepository<Playlist, BangerShareContext>
    {
        public PlaylistRepository(BangerShareContext context) : base(context) { }
    }
}
