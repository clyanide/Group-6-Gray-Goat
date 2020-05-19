import React from "react";
import { createFriendPlaylist } from "./Playlist";

const Explore = (props) => {
  const { playlists, handleOnPlaylistClick } = props;

  return (
    <div>
      <p>Explore</p>
      {createFriendPlaylist(playlists, handleOnPlaylistClick)}
    </div>
  );
};

export default Explore;
