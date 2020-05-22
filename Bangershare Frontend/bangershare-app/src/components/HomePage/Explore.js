import React from "react";
import { createFriendPlaylist } from "./Playlist";
import { Typography } from "@material-ui/core";

const Explore = (props) => {
  const {
    playlists,
    handleOnPlaylistClick,
    handleOnFollowClick,
    handleUnfollowClick,
  } = props;

  return (
    <div>
      <Typography variant="h5" style={{ marginLeft: "1vw", marginTop: "1vh" }}>Explore</Typography>
      {createFriendPlaylist(
        playlists,
        handleOnPlaylistClick,
        handleOnFollowClick,
        handleUnfollowClick
      )}
    </div>
  );
};

export default Explore;
