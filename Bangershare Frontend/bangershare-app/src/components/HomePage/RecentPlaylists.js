import React from "react";
import createPlaylist from "./Playlist";

const RecentPlaylists = (props) => {
  const { playlists, handleOnPlaylistClick } = props;
  return (
    <div>
      <p>Recent Playlists</p>
      {createPlaylist(playlists, handleOnPlaylistClick)}
    </div>
  );
};

export default RecentPlaylists;
