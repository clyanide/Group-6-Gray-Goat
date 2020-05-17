import React from "react";
import { createFriendPlaylist } from "./Playlist";

const Explore = (props) => {
  const { playlists } = props;

  return (
    <div>
      <p>Explore</p>
      {createFriendPlaylist(playlists)}
    </div>
  );
};

export default Explore;
