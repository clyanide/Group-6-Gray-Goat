using Bangershare_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Repositories
{
    public class FriendRepository : BaseRepository<Friend, BangerShareContext>
    {
        public FriendRepository(BangerShareContext context) : base(context) { }
    }
}
