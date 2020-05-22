import React, { Component } from "react";
import { withMediaProps } from "react-media-player";
import { Button } from "semantic-ui-react";

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
      <Button onClick={this._handlePlayPause}>
        {media.isPlaying ? "Pause" : "Play"}
      </Button>
    );
  }
}

export default withMediaProps(CustomPlayPause);
