import React from "react";
import SpotifyPlayer from "../../containers/SpotifyPlayer";
import YoutubePlayer from "./YoutubePlayer";

const MusicPlayer = ({ currentSong }) => {
  return (
    <div>
      {currentSong.songType === 0 ? (
        <SpotifyPlayer uri={currentSong.link} duration={currentSong.duration} />
      ) : (
        <YoutubePlayer link={currentSong.link} />
      )}
    </div>
  );
};

export default MusicPlayer;
