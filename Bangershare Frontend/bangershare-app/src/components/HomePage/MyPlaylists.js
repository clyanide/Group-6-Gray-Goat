import React from "react";
import createPlaylist from "./Playlist";

const MyPlaylists = (props) => {
  const { playlists, handleOnPlaylistClick, handleOnFollowClick, handleUnfollowClick } = props;
  return (
    <div>
      <p>My Playlists</p>
      {createPlaylist(playlists, handleOnPlaylistClick, handleOnFollowClick, handleUnfollowClick)}
    </div>
  );
};

export default MyPlaylists;
