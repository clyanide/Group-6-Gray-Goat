using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Interfaces;

namespace Bangershare_Backend.Models
{
    public class Playlist : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [MaxLength(150)]
        public string Name { get; set; }
        public virtual ICollection<Song> Songs { get; set; }
        public virtual ICollection<UserPlaylist> UserPlaylists { get; set; }
    }
}
