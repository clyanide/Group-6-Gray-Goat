import React from "react";
import createPlaylist from "./Playlist";

const RecentPlaylists = (props) => {
  const { playlists } = props;
  return (
    <div>
      <p>Recent Playlists</p>
      {createPlaylist(playlists)}
    </div>
  );
};

export default RecentPlaylists;
