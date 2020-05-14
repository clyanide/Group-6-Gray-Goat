using Bangershare_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Repositories
{
    public class FriendRepository : BaseRepository<Friend, BangerShareContext>
    {
        private readonly BangerShareContext _context;

        public FriendRepository(BangerShareContext context) : base(context) 
        {
            _context = context;
        }

        public void UpdateFriendRequest(Friend friendRequest)
        {
            _context.Update(friendRequest);
        }
    }
}
