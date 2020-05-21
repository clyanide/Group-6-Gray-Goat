import React from "react";
import { createFriendPlaylist } from "./Playlist";

const Explore = (props) => {
  const { playlists, handleOnPlaylistClick, handleOnFollowClick, handleUnfollowClick } = props;

  return (
    <div>
      <p>Explore</p>
      {createFriendPlaylist(playlists, handleOnPlaylistClick, handleOnFollowClick, handleUnfollowClick)}
    </div>
  );
};

export default Explore;
