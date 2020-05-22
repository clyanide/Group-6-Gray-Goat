import React, { Component } from "react";
import { withMediaProps } from "react-media-player";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }

  _handlePlayPause = () => {
    this.props.media.playPause();
  };

  render() {
    const { className, style, media } = this.props;
    return (
      <IconButton onClick={this._handlePlayPause} color="secondary">
        {media.isPlaying ? (
          <PauseCircleFilledIcon fontSize="large" />
        ) : (
          <PlayCircleFilledWhiteIcon fontSize="large" />
        )}
      </IconButton>
    );
  }
}

export default withMediaProps(CustomPlayPause);
