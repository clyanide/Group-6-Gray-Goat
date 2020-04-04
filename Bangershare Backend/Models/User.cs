using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Interfaces;

namespace Bangershare_Backend.Models
{
    public class User : IEntity
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public virtual ICollection<Friend> User1 { get; set; }
        public virtual ICollection<Friend> User2 { get; set; }
        public virtual ICollection<UserPlaylist> UserPlaylists { get; set; }
    }
}
