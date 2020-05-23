import React, { Component } from "react";
import { Media, Player } from "react-media-player";
import SeekBar from "./SeekBar";
import CustomPlayPause from "./CustomPlayPause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

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
              position: "absolute",
              paddingLeft: "3vw",
              paddingTop: "3vh",
            }}
          >
            <Typography
              variant="h6"
              style={{
                width: "15vw",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {this.props.currentSong.name}
            </Typography>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              style={{
                width: "15vw",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {this.props.currentSong.artist}
            </Typography>
          </div>
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
