using Microsoft.EntityFrameworkCore.Migrations;

namespace Bangershare_Backend.Migrations
{
    public partial class FriendUpdateMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Friend_User_User1Id",
                table: "Friend");

            migrationBuilder.DropForeignKey(
                name: "FK_Friend_User_User2Id",
                table: "Friend");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Friend",
                table: "Friend");

            migrationBuilder.DropIndex(
                name: "IX_Friend_User2Id",
                table: "Friend");

            migrationBuilder.DropColumn(
                name: "User1Id",
                table: "Friend");

            migrationBuilder.DropColumn(
                name: "User2Id",
                table: "Friend");

            migrationBuilder.AddColumn<int>(
                name: "SenderId",
                table: "Friend",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ReceiverId",
                table: "Friend",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Friend",
                table: "Friend",
                columns: new[] { "SenderId", "ReceiverId" });

            migrationBuilder.CreateIndex(
                name: "IX_Friend_ReceiverId",
                table: "Friend",
                column: "ReceiverId");

            migrationBuilder.AddForeignKey(
                name: "FK_Friend_User_ReceiverId",
                table: "Friend",
                column: "ReceiverId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Friend_User_SenderId",
                table: "Friend",
                column: "SenderId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Friend_User_ReceiverId",
                table: "Friend");

            migrationBuilder.DropForeignKey(
                name: "FK_Friend_User_SenderId",
                table: "Friend");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Friend",
                table: "Friend");

            migrationBuilder.DropIndex(
                name: "IX_Friend_ReceiverId",
                table: "Friend");

            migrationBuilder.DropColumn(
                name: "SenderId",
                table: "Friend");

            migrationBuilder.DropColumn(
                name: "ReceiverId",
                table: "Friend");

            migrationBuilder.AddColumn<int>(
                name: "User1Id",
                table: "Friend",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "User2Id",
                table: "Friend",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Friend",
                table: "Friend",
                columns: new[] { "User1Id", "User2Id" });

            migrationBuilder.CreateIndex(
                name: "IX_Friend_User2Id",
                table: "Friend",
                column: "User2Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Friend_User_User1Id",
                table: "Friend",
                column: "User1Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Friend_User_User2Id",
                table: "Friend",
                column: "User2Id",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
