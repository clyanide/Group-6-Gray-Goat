import React from "react";
import createPlaylist from "./Playlist"

const RecentPlaylists = (props) => {
  const { playlists } = props;
  return (
    <div>
      <div>
        <p>Recent Playlists</p>
      </div>
      {createPlaylist(playlists)}
    </div>
  );
};

export default RecentPlaylists;
