import React, { useState } from "react";
import SpotifyPlayer from "./SpotifyPlayer";
import YoutubePlayer from "./YoutubePlayer";

const MusicPlayer = () => {
  const [playerType, setPlayerType] = useState("spotify");
  return (
    <div>{playerType == "spotify" ? <SpotifyPlayer /> : <YoutubePlayer />}</div>
  );
};

export default MusicPlayer;
