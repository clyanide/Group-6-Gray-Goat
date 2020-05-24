import React from "react";
import Songs from "../../../containers/PlaylistPage/SongsList/Songs";
import PendingSongs from "../../../containers/PlaylistPage/SongsList/PendingSongs";
import { Typography } from "@material-ui/core";

const SongList = (props) => {
  const { songs, isOwner } = props;

  return (
    <div
      style={{
        overflowY: "scroll",
        height: "72vh",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Songs
        isOwner={isOwner}
        songs={songs.filter((song) => song.isPending === false)}
      />
      {isOwner ? (
        <>
          <Typography variant="h6" style={{ paddingLeft: "25px", paddingTop: "3vh" }}> Pending Songs </Typography>
          <Typography color="textSecondary" variant="subtitle" style={{ paddingLeft: "25px", paddingTop: "3vh" }}> Suggested by others </Typography>
          <PendingSongs songs={songs.filter((song) => song.isPending === true)} />
        </>
      ) : null}
    </div>
  );
};

export default SongList;
