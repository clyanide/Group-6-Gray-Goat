using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Models;

namespace Bangershare_Backend.Repositories
{
    public class UserRepository : BaseRepository<User, BangerShareContext>
    {
        public UserRepository(BangerShareContext context) : base(context) { }
    }
}
