import React from "react";
import ReactPlayer from "react-player";

const YoutubePlayer = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=pmxYePDPV6M"
      playing={true}
    />
  );
};

export default YoutubePlayer;
