import React from "react";
import createPlaylist from "./Playlist";

const RecentPlaylists = (props) => {
  const { playlists, handleOnPlaylistClick, handleOnFollowClick } = props;
  return (
    <div>
      <p>Recent Playlists</p>
      {createPlaylist(playlists, handleOnPlaylistClick, handleOnFollowClick)}
    </div>
  );
};

export default RecentPlaylists;
