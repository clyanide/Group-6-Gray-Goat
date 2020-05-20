import React from "react";
import SpotifyPlayer from "../../containers/SpotifyPlayer";
import YoutubePlayer from "./YoutubePlayer";

const MusicPlayer = ({ songType, songUri, songLink, songDuration }) => {
  return (
    <div>
      {console.log(
        songLink + "-----------------------------------------------------"
      )}
      {songType === "spotify" ? (
        <SpotifyPlayer uri={songUri} duration={songDuration} />
      ) : (
        <YoutubePlayer link={songLink} />
      )}
    </div>
  );
};

export default MusicPlayer;
