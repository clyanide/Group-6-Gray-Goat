using Bangershare_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Dtos
{
    public class FriendDto
    {
        public string SenderUsername { get; set; }
        public string ReceiverUsername { get; set; }
        public FriendType FriendType { get; set; }
    }
}
