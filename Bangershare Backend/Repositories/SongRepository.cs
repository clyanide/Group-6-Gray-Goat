using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bangershare_Backend.Models;

namespace Bangershare_Backend.Repositories
{
    public class SongRepository : BaseRepository<Song, BangerShareContext>
    {
        private readonly BangerShareContext _context;

        public SongRepository(BangerShareContext context) : base(context) 
        {
            _context = context;
        }

        public void RemoveSongs(ICollection<Song> songs)
        {
            _context.Song.RemoveRange(songs);
        }

        public void UpdateSong(Song song)
        {
            _context.Song.Update(song);
        }
    }
}
