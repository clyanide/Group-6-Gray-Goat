import React from "react";
import createPlaylist from "./Playlist";

const playlists = [
  {
    name: "dad"
  },
  {
    name: "ffff"
  },
  {
    name: "ffsafasfa"
  },
]

const Explore = () => {
  return (
    <div>
      <p>Explore</p>
      {createPlaylist(playlists)}
    </div>
  );
};

export default Explore;
