import React from "react";
import ReactPlayer from "react-player";

const YoutubePlayer = (props) => {
  return <ReactPlayer url={props.link} playing={true} />;
};

export default YoutubePlayer;
