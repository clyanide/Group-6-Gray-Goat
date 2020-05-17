import React from "react";
import createPlaylist from "./Playlist";

const MyPlaylists = (props) => {
  const { playlists } = props;
  return (
    <div>
      <p>My Playlists</p>
      {createPlaylist(playlists)}
    </div>
  );
};

export default MyPlaylists;
