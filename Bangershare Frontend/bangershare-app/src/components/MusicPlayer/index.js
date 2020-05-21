import React, { useState, useEffect } from "react";
import SpotifyPlayer from "../../containers/SpotifyPlayer";
import YoutubePlayer from "../../containers/YoutubePlayer";

const MusicPlayer = ({ currentSong }) => {
  const [spotifyFirstLoad, setspotifyFirstLoad] = useState(false);

  useEffect(() => {
    if (currentSong.songType == 0) {
      setspotifyFirstLoad(true);
    }
  }, [setspotifyFirstLoad, currentSong.songType]);

  return (
    <div>
      <YoutubePlayer link={currentSong.link} />
      {spotifyFirstLoad ? (
        <SpotifyPlayer
          uri={currentSong.link}
          duration={currentSong.duration}
          type={currentSong.songType}
          currentSong={currentSong}
        />
      ) : null}
    </div>
  );
};

export default MusicPlayer;
