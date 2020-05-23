import React, { Component } from "react";
import { withMediaProps } from "react-media-player";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Avatar } from "@material-ui/core";

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }

  _handlePlayPause = () => {
    this.props.media.playPause();
  };

  render() {
    const { media } = this.props;
    return (
      <IconButton onClick={this._handlePlayPause} color="secondary">
        <Avatar style={{ backgroundColor: "#ff3d00" }}>
          {media.isPlaying ? (
            <PauseIcon style={{ fill: "white" }} fontSize="default" />
          ) : (
              <PlayArrowIcon style={{ fill: "white" }} fontSize="large" />
            )}
        </Avatar>
      </IconButton>
    );
  }
}

export default withMediaProps(CustomPlayPause);
