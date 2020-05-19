import React from "react";
import createPlaylist from "./Playlist";

const MyPlaylists = (props) => {
  const { playlists, handleOnPlaylistClick } = props;
  return (
    <div>
      <p>My Playlists</p>
      {createPlaylist(playlists, handleOnPlaylistClick)}
    </div>
  );
};

export default MyPlaylists;
