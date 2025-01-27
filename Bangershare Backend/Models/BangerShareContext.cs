﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bangershare_Backend.Models
{
    public class BangerShareContext : DbContext
    {
        public BangerShareContext(DbContextOptions<BangerShareContext> options) : base(options) { }

        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Friend> Friend { get; set; }
        public virtual DbSet<UserPlaylist> UserPlaylists { get; set; }
        public virtual DbSet<Playlist> Playlist { get; set; }
        public virtual DbSet<Song> Song { get; set; }
        public virtual DbSet<UserLike> UserLike { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Email)
                    .IsUnique();

                entity.HasIndex(e => e.Username)
                    .IsUnique();
            });

            modelBuilder.Entity<Friend>(entity => {
                entity.HasKey(e => new { e.SenderId, e.ReceiverId });

                entity.HasOne(e => e.Sender)
                    .WithMany(e => e.Sent)
                    .HasForeignKey(e => e.SenderId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(e => e.Receiver)
                    .WithMany(e => e.Receieved)
                    .HasForeignKey(e => e.ReceiverId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.Property(e => e.FriendType)
                    .HasConversion(
                        e => e.ToString(),
                        e => (FriendType)Enum.Parse(typeof(FriendType), e))
                    .HasMaxLength(150);
            });

            modelBuilder.Entity<UserPlaylist>(entity => {
                entity.HasKey(e => new { e.UserId, e.PlaylistId });

                entity.HasOne(e => e.User)
                    .WithMany(e => e.UserPlaylists)
                    .HasForeignKey(e => e.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);


                entity.HasOne(e => e.Playlist)
                    .WithMany(e => e.UserPlaylists)
                    .HasForeignKey(e => e.PlaylistId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<Song>(entity => { 
                entity.HasOne(e => e.Playlist)
                    .WithMany(e => e.Songs)
                    .HasForeignKey(e => e.PlaylistId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.Property(e => e.SongType)
                    .HasConversion(
                        e => e.ToString(),
                        e => (SongType)Enum.Parse(typeof(SongType), e))
                    .HasMaxLength(150);
            });

            modelBuilder.Entity<UserLike>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.SongId });

                entity.HasOne(e => e.Song)
                    .WithMany(e => e.UserLikes)
                    .HasForeignKey(e => e.SongId);

                entity.HasOne(e => e.User)
                    .WithMany(e => e.UserLikes)
                    .HasForeignKey(e => e.UserId);
            });
        }
    }
}
