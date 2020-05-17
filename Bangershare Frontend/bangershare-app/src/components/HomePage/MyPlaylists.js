import React from "react";
import createPlaylist from "./Playlist"

const MyPlaylists = (props) => {
  const { playlists } = props;
  return (
    <div>
      <div>
        <p>My Playlists</p>
      </div>
      {createPlaylist(playlists)}
    </div>
  );
};

export default MyPlaylists;
