import React, { Component } from "react";
import { Media, Player, controls } from "react-media-player";
import SeekBar from "./SeekBar";

const { PlayPause } = controls;

class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Media>
        <div>
          <div>
            <Player
              style={{ width: 0, height: 0 }}
              src={this.props.link}
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
