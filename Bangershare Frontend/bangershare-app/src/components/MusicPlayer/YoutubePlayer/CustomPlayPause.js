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
      <IconButton icon onClick={this._handlePlayPause}>
        {media.isPlaying ? (
          <PauseCircleFilledIcon />
        ) : (
          <PlayCircleFilledWhiteIcon />
        )}
      </IconButton>
    );
  }
}

export default withMediaProps(CustomPlayPause);
