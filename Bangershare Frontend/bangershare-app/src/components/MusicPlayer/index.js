import React, { useState } from "react";
import SpotifyPlayer from "../../containers/SpotifyPlayer";
import YoutubePlayer from "./YoutubePlayer";

const mockSongObject = {
  type: "spotify",
  uri: "spotify:track:7BsKwPYQu8PQIEy3CCfPVJ",
  link: "",
  duration: 266000,
};

const MusicPlayer = () => {
  return (
    <div>
      {mockSongObject.type == "spotify" ? (
        <SpotifyPlayer
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
