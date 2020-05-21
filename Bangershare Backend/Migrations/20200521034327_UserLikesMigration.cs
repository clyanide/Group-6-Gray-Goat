using Microsoft.EntityFrameworkCore.Migrations;

namespace Bangershare_Backend.Migrations
{
    public partial class UserLikesMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserLike",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    SongId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserLike", x => new { x.UserId, x.SongId });
                    table.ForeignKey(
                        name: "FK_UserLike_Song_SongId",
                        column: x => x.SongId,
                        principalTable: "Song",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserLike_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserLike_SongId",
                table: "UserLike",
                column: "SongId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserLike");
        }
    }
}
