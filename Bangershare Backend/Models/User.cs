﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Interfaces;

namespace Bangershare_Backend.Models
{
    public class User : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [MaxLength(150)]
        public string Email { get; set; }
        [MaxLength(150)]
        public string Username { get; set; }
        [MaxLength(150)]
        public string Password { get; set; }
        public virtual ICollection<Friend> Sent { get; set; }
        public virtual ICollection<Friend> Receieved { get; set; }
        public virtual ICollection<UserPlaylist> UserPlaylists { get; set; }
        public virtual ICollection<UserLike> UserLikes { get; set; }

    }
}
