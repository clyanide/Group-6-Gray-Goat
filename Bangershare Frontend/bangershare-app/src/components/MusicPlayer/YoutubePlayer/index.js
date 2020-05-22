import React, { Component } from "react";
import { Media, Player, controls } from "react-media-player";
import SeekBar from "./SeekBar";
import CustomPlayPause from "./CustomPlayPause";
import { Button } from "semantic-ui-react";

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
            <p>Artist: {this.props.currentSong.artist}</p>
            <p>Track: {this.props.currentSong.artist}</p>
            <p>Playlist: {this.props.currentPlayingPlaylist.name}</p>
          </div>
          <div>
            <SeekBar endOfSongCallback={this.endOfSongCallback} />
          </div>
          <div>
            <Button onClick={() => this.handlePrevClick()}>Prev</Button>
            <CustomPlayPause />
            <Button onClick={() => this.handleNextClick()}>Next</Button>
          </div>
        </div>
      </Media>
    );
  }
}

export default YoutubePlayer;
