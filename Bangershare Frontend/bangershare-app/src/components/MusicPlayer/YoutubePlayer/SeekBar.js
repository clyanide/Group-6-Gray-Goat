import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";
import { withMediaProps } from "react-media-player";

class SeekBar extends Component {
  _handlePlayPause = () => {
    this.props.media.playPause();
    console.log(this.props.media.duration);
    console.log(this.props.media.progress);
  };

  convertToTimestamp = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return { m: minutes, s: seconds };
  };
  render() {
    const { className, style, media } = this.props;
    return (
      <div>
        <Slider
          onChange={(event, value) => this.props.media.seekTo(value)}
          max={this.props.media.duration}
          value={this.props.media.currentTime}
        />
        <p>
          {this.convertToTimestamp(this.props.media.currentTime).m} :{" "}
          {this.convertToTimestamp(this.props.media.currentTime).s < 10
            ? "0"
            : null}
          {this.convertToTimestamp(this.props.media.currentTime).s}
        </p>
        <p>
          {this.convertToTimestamp(this.props.media.duration).m} :{" "}
          {this.convertToTimestamp(this.props.media.duration).s < 10
            ? "0"
            : null}
          {this.convertToTimestamp(this.props.media.duration).s}
        </p>
      </div>
    );
  }
}

export default withMediaProps(SeekBar);
