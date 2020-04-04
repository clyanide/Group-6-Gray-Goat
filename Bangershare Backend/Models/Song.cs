using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        public int Id { get; set; }
        public bool IsPending { get; set; }
        public int Hearts { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Link { get; set; }
        public SongType SongType { get; set; }
        public virtual Playlist Playlist { get; set; }
        public int PlaylistId { get; set; }
    }
}
