import React from "react";
import createPlaylist from "./Playlist"

const playlists = [
  {
    name: "sjhdakjdasdsa"
  },
  {
    name: "dasdsadsdsd"
  },
  {
    name: "Bangers"
  },
  {
    name: "stuff"
  },
]

const RecentPlaylists = () => {
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
