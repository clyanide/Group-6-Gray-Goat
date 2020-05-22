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
          <div>
            <Player
              style={{ width: 0, height: 0 }}
              src={this.props.link}
              autoPlay={true}
            />
            <div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Artist: {this.props.currentSong.artist}
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Track: {this.props.currentSong.artist}
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Playlist: {this.props.currentPlayingPlaylist.name}
              </p>
            </div>
          </div>
          <div>
            <SeekBar endOfSongCallback={this.endOfSongCallback} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton color="primary" onClick={() => this.handlePrevClick()}>
              <SkipPreviousIcon />
            </IconButton>
            <CustomPlayPause />
            <IconButton color="primary" onClick={() => this.handleNextClick()}>
              <SkipNextIcon />
            </IconButton>
          </div>
        </div>
      </Media>
    );
  }
}

export default YoutubePlayer;
