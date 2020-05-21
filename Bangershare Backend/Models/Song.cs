using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Interfaces;

namespace Bangershare_Backend.Models
{
    public enum SongType
    {
        Spotify, SoundCloud, Youtube
    }

    public class Song : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public bool IsPending { get; set; }
        public int Hearts { get; set; }
        [MaxLength(150)]
        public string Name { get; set; }
        [MaxLength(150)]
        public string Artist { get; set; }
        [MaxLength(300)]
        public string Link { get; set; }
        public int Duration { get; set; }
        public SongType SongType { get; set; }
        public virtual Playlist Playlist { get; set; }
        public int PlaylistId { get; set; }

        public virtual ICollection<UserLike> UserLikes { get; set; }
    }
}
