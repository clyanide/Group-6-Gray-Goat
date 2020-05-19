import React, { useState, Component } from "react";
import SpotifyPlayer from "../../containers/SpotifyPlayer";
import YoutubePlayer from "./YoutubePlayer";

const mockSongObject = {
  type: "spotify",
  uri: "spotify:track:7BsKwPYQu8PQIEy3CCfPVJ",
  link: "https://www.youtube.com/watch?v=iPlfQ8yWIeA",
  duration: 266000,
};

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(true);

  const updatePlaying = (playing) => {
    setPlaying(!playing);
  };

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
    </div>
  );
};

export default MusicPlayer;
