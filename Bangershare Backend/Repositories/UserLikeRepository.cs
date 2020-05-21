using Bangershare_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Repositories
{
    public class UserLikeRepository : BaseRepository<UserLike, BangerShareContext>
    {
        public UserLikeRepository(BangerShareContext context) : base(context)
        {
        }
    }
}
