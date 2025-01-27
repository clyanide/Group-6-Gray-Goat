import React, { useState, useEffect } from "react";
import SpotifyPlayer from "../../containers/SpotifyPlayer";
import YoutubePlayer from "../../containers/YoutubePlayer";

const MusicPlayer = ({ currentSong }) => {
  const [spotifyFirstLoad, setspotifyFirstLoad] = useState(false);

  // Render spotify player when spotify song is selected
  useEffect(() => {
    if (currentSong.songType === 0) {
      setspotifyFirstLoad(true);
    }
  }, [setspotifyFirstLoad, currentSong.songType]);

  const nmsl = currentSong.songType === 0 ? "0" : "105vw";
  const cnm = currentSong.songType === 2 ? "0" : "105vw";

  return (
    <div>
      {localStorage.getItem("token") != null ? (
        <div>
          <div
            style={{
              left: cnm,
              position: "fixed",
              bottom: "0%",
              width: "100%",
              backgroundColor: "#282828",
            }}
          >
            <YoutubePlayer link={currentSong.link} />
          </div>
          <div
            style={{
              left: nmsl,
              position: "fixed",
              bottom: "0%",
              width: "100%",
              backgroundColor: "#282828",
            }}
          >
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
      ) : null}
    </div>
  );
};

export default MusicPlayer;
