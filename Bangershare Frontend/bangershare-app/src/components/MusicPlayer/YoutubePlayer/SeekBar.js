import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";
import { withMediaProps } from "react-media-player";

class SeekBar extends Component {
  // Check if props has changed and update seekbar position
  componentDidUpdate(prevProps) {
    if (prevProps.media.currentTime !== this.props.media.currentTime) {
      if (
        Math.trunc(this.props.media.currentTime) ===
          Math.trunc(this.props.media.duration) &&
        Math.trunc(this.props.media.duration) !== 0
      ) {
        this.props.endOfSongCallback();
      }
    }
  }

  _handlePlayPause = () => {
    this.props.media.playPause();
  };

  convertToTimestamp = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.trunc(time - minutes * 60);

    return { m: minutes, s: seconds };
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80vw",
            paddingLeft: "20vw",
          }}
        >
          <Slider
            color="secondary"
            onChange={(event, value) => this.props.media.seekTo(value)}
            max={this.props.media.duration}
            value={this.props.media.currentTime}
          />
        </div>
        <div>
          <p
            style={{
              position: "relative",
              left: "20vw",
              display: "inline-block",
            }}
          >
            {this.convertToTimestamp(this.props.media.currentTime).m} :{" "}
            {this.convertToTimestamp(this.props.media.currentTime).s < 10
              ? "0"
              : null}
            {this.convertToTimestamp(this.props.media.currentTime).s}
          </p>
          <p
            style={{
              position: "relative",
              left: "20.3vw",
              display: "inline-block",
            }}
          >
            / {this.convertToTimestamp(this.props.media.duration).m} :{" "}
            {this.convertToTimestamp(this.props.media.duration).s < 10
              ? "0"
              : null}
            {this.convertToTimestamp(this.props.media.duration).s}
          </p>
        </div>
      </div>
    );
  }
}

export default withMediaProps(SeekBar);
