using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Models
{
    public class UserLike
    {
        public User User { get; set; }
        public Song Song { get; set; }
        public int UserId { get; set; }
        public int SongId { get; set; }
    }
}
