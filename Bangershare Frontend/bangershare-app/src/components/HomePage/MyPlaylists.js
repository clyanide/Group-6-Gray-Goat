import React from "react";
import createPlaylist from "./Playlist"

const playlists = [
  {
    name: "test"
  },
  {
    name: "hi"
  },
  {
    name: "lol"
  },
  {
    name: "test"
  },
  {
    name: "hi"
  },
  {
    name: "lol"
  },
  {
    name: "test"
  },
  {
    name: "hi"
  },
  {
    name: "lol"
  },
]

const MyPlaylists = () => {
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
