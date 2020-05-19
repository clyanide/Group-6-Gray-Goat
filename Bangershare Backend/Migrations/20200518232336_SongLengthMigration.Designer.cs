﻿// <auto-generated />
using Bangershare_Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Bangershare_Backend.Migrations
{
    [DbContext(typeof(BangerShareContext))]
    [Migration("20200518232336_SongLengthMigration")]
    partial class SongLengthMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Bangershare_Backend.Models.Friend", b =>
                {
                    b.Property<int>("SenderId")
                        .HasColumnType("int");

                    b.Property<int>("ReceiverId")
                        .HasColumnType("int");

                    b.Property<string>("FriendType")
                        .IsRequired()
                        .HasColumnType("varchar(150) CHARACTER SET utf8mb4")
                        .HasMaxLength(150);

                    b.HasKey("SenderId", "ReceiverId");

                    b.HasIndex("ReceiverId");

                    b.ToTable("Friend");
                });

            modelBuilder.Entity("Bangershare_Backend.Models.Playlist", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("varchar(150) CHARACTER SET utf8mb4")
                        .HasMaxLength(150);

                    b.HasKey("Id");

                    b.ToTable("Playlist");
                });

            modelBuilder.Entity("Bangershare_Backend.Models.Song", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Artist")
                        .HasColumnType("varchar(150) CHARACTER SET utf8mb4")
                        .HasMaxLength(150);

                    b.Property<int>("Duration")
                        .HasColumnType("int");

                    b.Property<int>("Hearts")
                        .HasColumnType("int");

                    b.Property<bool>("IsPending")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("Link")
                        .HasColumnType("varchar(300) CHARACTER SET utf8mb4")
                        .HasMaxLength(300);

                    b.Property<string>("Name")
                        .HasColumnType("varchar(150) CHARACTER SET utf8mb4")
                        .HasMaxLength(150);

                    b.Property<int>("PlaylistId")
                        .HasColumnType("int");

                    b.Property<string>("SongType")
                        .IsRequired()
                        .HasColumnType("varchar(150) CHARACTER SET utf8mb4")
                        .HasMaxLength(150);

                    b.HasKey("Id");

                    b.HasIndex("PlaylistId");

                    b.ToTable("Song");
                });

            modelBuilder.Entity("Bangershare_Backend.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("varchar(150) CHARACTER SET utf8mb4")
                        .HasMaxLength(150);

                    b.Property<string>("Password")
                        .HasColumnType("varchar(150) CHARACTER SET utf8mb4")
                        .HasMaxLength(150);

                    b.Property<string>("Username")
                        .HasColumnType("varchar(150) CHARACTER SET utf8mb4")
                        .HasMaxLength(150);

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("Username")
                        .IsUnique();

                    b.ToTable("User");
                });

            modelBuilder.Entity("Bangershare_Backend.Models.UserPlaylist", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("PlaylistId")
                        .HasColumnType("int");

                    b.Property<bool>("IsOwner")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("UserId", "PlaylistId");

                    b.HasIndex("PlaylistId");

                    b.ToTable("UserPlaylists");
                });

            modelBuilder.Entity("Bangershare_Backend.Models.Friend", b =>
                {
                    b.HasOne("Bangershare_Backend.Models.User", "Receiver")
                        .WithMany("Sent")
                        .HasForeignKey("ReceiverId")
                        .IsRequired();

                    b.HasOne("Bangershare_Backend.Models.User", "Sender")
                        .WithMany("Receieved")
                        .HasForeignKey("SenderId")
                        .IsRequired();
                });

            modelBuilder.Entity("Bangershare_Backend.Models.Song", b =>
                {
                    b.HasOne("Bangershare_Backend.Models.Playlist", "Playlist")
                        .WithMany("Songs")
                        .HasForeignKey("PlaylistId")
                        .IsRequired();
                });

            modelBuilder.Entity("Bangershare_Backend.Models.UserPlaylist", b =>
                {
                    b.HasOne("Bangershare_Backend.Models.Playlist", "Playlist")
                        .WithMany("UserPlaylists")
                        .HasForeignKey("PlaylistId")
                        .IsRequired();

                    b.HasOne("Bangershare_Backend.Models.User", "User")
                        .WithMany("UserPlaylists")
                        .HasForeignKey("UserId")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
