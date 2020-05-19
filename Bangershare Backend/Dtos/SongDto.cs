using Bangershare_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Dtos
{
    public class SongDto
    {
        public int Id { get; set; }
        public bool IsPending { get; set; }
        public int Hearts { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        public string Link { get; set; }
        public int Duration { get; set; }
        public SongType SongType { get; set; }
    }
}
