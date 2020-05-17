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
      <div>
        <p>Explore</p>
      </div>
      {createPlaylist(playlists)}
    </div>
  );
};

export default Explore;
