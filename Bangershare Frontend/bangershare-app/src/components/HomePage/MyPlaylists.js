import React from "react";
import createPlaylist from "./Playlist";
import { Typography } from "@material-ui/core";

const MyPlaylists = (props) => {
  const {
    playlists,
    handleOnPlaylistClick,
    handleOnFollowClick,
    handleUnfollowClick,
  } = props;
  return (
    <div>
      <Typography variant="h5" style={{ marginLeft: "20px", marginTop: "1vh" }}>
        My Playlists
      </Typography>
      {createPlaylist(
        playlists,
        handleOnPlaylistClick,
        handleOnFollowClick,
        handleUnfollowClick
      )}
    </div>
  );
};

export default MyPlaylists;
