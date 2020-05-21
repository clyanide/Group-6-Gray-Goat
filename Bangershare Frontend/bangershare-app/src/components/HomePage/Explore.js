import React from "react";
import { createFriendPlaylist } from "./Playlist";

const Explore = (props) => {
  const { playlists, handleOnPlaylistClick, handleOnFollowClick } = props;

  return (
    <div>
      <p>Explore</p>
      {createFriendPlaylist(playlists, handleOnPlaylistClick, handleOnFollowClick)}
    </div>
  );
};

export default Explore;
