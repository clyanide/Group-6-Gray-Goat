using Microsoft.EntityFrameworkCore.Migrations;

namespace Bangershare_Backend.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Playlist",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Playlist", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Song",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsPending = table.Column<bool>(nullable: false),
                    Hearts = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Artist = table.Column<string>(nullable: true),
                    Link = table.Column<string>(nullable: true),
                    SongType = table.Column<string>(nullable: false),
                    PlaylistId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Song", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Song_Playlist_PlaylistId",
                        column: x => x.PlaylistId,
                        principalTable: "Playlist",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Friend",
                columns: table => new
                {
                    User1Id = table.Column<int>(nullable: false),
                    User2Id = table.Column<int>(nullable: false),
                    FriendType = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Friend", x => new { x.User1Id, x.User2Id });
                    table.ForeignKey(
                        name: "FK_Friend_User_User1Id",
                        column: x => x.User1Id,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Friend_User_User2Id",
                        column: x => x.User2Id,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserPlaylists",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    PlaylistId = table.Column<int>(nullable: false),
                    IsOwner = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserPlaylists", x => new { x.UserId, x.PlaylistId });
                    table.ForeignKey(
                        name: "FK_UserPlaylists_Playlist_PlaylistId",
                        column: x => x.PlaylistId,
                        principalTable: "Playlist",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserPlaylists_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Friend_User2Id",
                table: "Friend",
                column: "User2Id");

            migrationBuilder.CreateIndex(
                name: "IX_Song_PlaylistId",
                table: "Song",
                column: "PlaylistId");

            migrationBuilder.CreateIndex(
                name: "IX_User_Email",
                table: "User",
                column: "Email",
                unique: true,
                filter: "[Email] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_User_Username",
                table: "User",
                column: "Username",
                unique: true,
                filter: "[Username] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_UserPlaylists_PlaylistId",
                table: "UserPlaylists",
                column: "PlaylistId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Friend");

            migrationBuilder.DropTable(
                name: "Song");

            migrationBuilder.DropTable(
                name: "UserPlaylists");

            migrationBuilder.DropTable(
                name: "Playlist");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
