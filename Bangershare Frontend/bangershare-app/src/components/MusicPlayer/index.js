import React, { useState, useRef } from "react";
import SpotifyPlayer from "../../containers/SpotifyPlayer";
import YoutubePlayer from "./YoutubePlayer";

const mockSongObject = {
  type: "spotify",
  uri: "spotify:track:7BsKwPYQu8PQIEy3CCfPVJ",
  link: "",
  duration: 266000,
};

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(true);

  const updatePlaying = (playing) => {
    setPlaying(!playing);
  };

  const handlePlay = () => {};

  const handleNext = () => {};

  const handlePrev = () => {};

  return (
    <div>
      {mockSongObject.type == "spotify" ? (
        <SpotifyPlayer
          callbackFromParent={updatePlaying}
          uri={mockSongObject.uri}
          duration={mockSongObject.duration}
        />
      ) : (
        <YoutubePlayer link={mockSongObject.link} />
      )}
      <button onClick={() => handlePrev()}>Prev</button>
      <button onClick={() => handlePlay()}>{playing ? "Pause" : "Play"}</button>
      <button onClick={() => handleNext()}>Next</button>
    </div>
  );
};

export default MusicPlayer;
