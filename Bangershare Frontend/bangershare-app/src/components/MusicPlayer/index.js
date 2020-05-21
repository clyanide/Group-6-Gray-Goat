import React, { useState, useEffect } from "react";
import SpotifyPlayer from "../../containers/SpotifyPlayer";
import YoutubePlayer from "../../containers/YoutubePlayer";

const MusicPlayer = ({ currentSong }) => {
  const [spotifyFirstLoad, setspotifyFirstLoad] = useState(false);

  useEffect(() => {
    if (currentSong.songType === 0) {
      setspotifyFirstLoad(true);
    }
  }, [setspotifyFirstLoad, currentSong.songType]);

  const nmsl = currentSong.songType === 0 ? "0" : "105vw";
  const cnm = currentSong.songType === 2 ? "0" : "105vw";

  return (
    <div>
      <div style={{ paddingLeft: cnm }}>
        <YoutubePlayer link={currentSong.link} />
      </div>
      <div style={{ paddingLeft: nmsl }}>
        {spotifyFirstLoad ? (
          <SpotifyPlayer
            uri={currentSong.link}
            duration={currentSong.duration}
            type={currentSong.songType}
            currentSong={currentSong}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MusicPlayer;
