import React from "react";
import createPlaylist from "./Playlist";

const RecentPlaylists = (props) => {
  const {
    playlists,
    handleOnPlaylistClick,
    handleOnFollowClick,
    handleUnfollowClick,
  } = props;
  return (
    <div>
      <p>Recent Playlists</p>
      {createPlaylist(
        playlists,
        handleOnPlaylistClick,
        handleOnFollowClick,
        handleUnfollowClick
      )}
    </div>
  );
};

export default RecentPlaylists;
