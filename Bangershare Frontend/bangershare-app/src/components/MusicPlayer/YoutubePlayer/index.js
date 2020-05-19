import React, { Component } from "react";
import { Media, Player, controls, withMediaProps } from "react-media-player";
import SeekBar from "./SeekBar";

const { PlayPause, MuteUnmute } = controls;

class YoutubePlayer extends Component {
  render() {
    return (
      <Media>
        <div>
          <div>
            <Player
              ref={this.ref}
              src="https://www.youtube.com/watch?v=nPcDlQaYoDw"
              autoPlay={true}
            />
          </div>
          <div>
            <SeekBar />
          </div>
          <div>
            <button onClick={this.handleClick}>Prev</button>
            <PlayPause />
            <button>Next</button>
          </div>
        </div>
      </Media>
    );
  }
}

export default YoutubePlayer;
