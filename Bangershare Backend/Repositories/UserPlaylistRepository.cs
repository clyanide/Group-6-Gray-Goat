using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Models;

namespace Bangershare_Backend.Repositories
{
    public class UserPlaylistRepository : BaseRepository<UserPlaylist, BangerShareContext>
    {
        public UserPlaylistRepository(BangerShareContext context) : base(context) { }
    }
}
