using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Models
{
    public enum FriendType
    {
        Friend, Pending, Blocked
    }

    public class Friend
    {
        public int User1Id { get; set; }
        public int User2Id { get; set; }
        public FriendType FriendType { get; set; }
        public virtual User User1 { get; set; }
        public virtual User User2 { get; set; }
    }
}
