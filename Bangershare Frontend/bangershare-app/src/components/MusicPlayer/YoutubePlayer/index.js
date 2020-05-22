import React, { Component } from "react";
import { Media, Player, controls } from "react-media-player";
import SeekBar from "./SeekBar";
import CustomPlayPause from "./CustomPlayPause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import IconButton from "@material-ui/core/IconButton";

const { PlayPause } = controls;

class YoutubePlayer extends Component {
  handleNextClick = () => {
    this.props.setSong(
      this.getNextSong(
        this.props.currentSong,
        this.props.currentPlayingPlaylist
      )
    );
  };

  handlePrevClick = () => {
    this.props.setSong(
      this.getPrevSong(
        this.props.currentSong,
        this.props.currentPlayingPlaylist
      )
    );
  };

  getNextSong = (currentSong, currentPlayingPlaylist) => {
    const songList = currentPlayingPlaylist.songs;

    let i = 0;
    for (i = 0; i < songList.length; i++) {
      if (currentSong.id === songList[i].id) {
        if (i < songList.length - 1) {
          return songList[i + 1];
        } else return songList[0];
      }
    }
  };

  getPrevSong = (currentSong, currentPlayingPlaylist) => {
    const songList = currentPlayingPlaylist.songs;

    let i = 0;
    for (i = 0; i < songList.length; i++) {
      if (currentSong.id === songList[i].id) {
        if (i > 0) {
          return songList[i - 1];
        } else return songList[songList.length - 1];
      }
    }
  };

  endOfSongCallback = () => {
    this.handleNextClick();
  };

  render() {
    return (
      <Media>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
              }}
            >
              <Player
                style={{ width: 0, height: 0 }}
                src={this.props.link}
                autoPlay={true}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: "inline-block",
              }}
            >
              <IconButton
                color="secondary"
                onClick={() => this.handlePrevClick()}
              >
                <SkipPreviousIcon fontSize="large" />
              </IconButton>
              <CustomPlayPause />
              <IconButton
                color="secondary"
                onClick={() => this.handleNextClick()}
              >
                <SkipNextIcon fontSize="large" />
              </IconButton>
            </div>
          </div>
          <div>
            <div
              style={{
                float: "left",
                position: "absolute",
                paddingLeft: "5vw",
              }}
            >
              <p>{this.props.currentSong.name}</p>
              <p>{this.props.currentSong.artist}</p>
            </div>
            <div>
              <SeekBar endOfSongCallback={this.endOfSongCallback} />
            </div>
          </div>
        </div>
      </Media>
    );
  }
}

export default YoutubePlayer;
