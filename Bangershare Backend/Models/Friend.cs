using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Models
{
    public enum FriendType
    {
        Friend, Pending
    }

    public class Friend
    {
        public int SenderId { get; set; }
        public int ReceiverId { get; set; }
        public FriendType FriendType { get; set; }
        public virtual User Sender { get; set; }
        public virtual User Receiver { get; set; }
    }
}
