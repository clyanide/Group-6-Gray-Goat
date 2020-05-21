import React from "react";
import createPlaylist from "./Playlist";

const MyPlaylists = (props) => {
  const { playlists, handleOnPlaylistClick, handleOnFollowClick } = props;
  return (
    <div>
      <p>My Playlists</p>
      {createPlaylist(playlists, handleOnPlaylistClick, handleOnFollowClick)}
    </div>
  );
};

export default MyPlaylists;
