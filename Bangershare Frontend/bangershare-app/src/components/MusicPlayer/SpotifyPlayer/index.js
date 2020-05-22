import React, { Component } from "react";
import SeekBar from "./SeekBar";
import equal from "fast-deep-equal";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import { Typography } from "@material-ui/core";

class SpotifyPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.spotifyToken,
      deviceId: "",
      loggedIn: true,
      error: "",
      trackName: "",
      artistName: "",
      albumName: "",
      playing: false,
      position: 0,
      duration: 0,
      time: 0,
    };

    this.checkForPlayer();
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props.uri, prevProps.uri)) {
      // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
      if (this.props.type === 0) {
        this.setState({ trackName: "" });
        this.playUri({
          playerInstance: this.player,
          spotify_uri: this.props.uri,
        });
      }
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.checkSongChanged(), 1000);
  }

  checkSongChanged() {
    if (this.props.currentSong.songType !== 0) {
      this.setState({ trackName: "" });
      this.player.pause();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  checkForPlayer() {
    const { token } = this.state;

    if (window.Spotify !== null) {
      this.player = new window.Spotify.Player({
        name: "BangerShare",
        getOAuthToken: (cb) => {
          cb(token);
        },
      });
      this.createEventHandlers();

      // finally, connect!
      this.player.connect();
    }
  }

  createEventHandlers() {
    this.player.on("initialization_error", (e) => {
      console.error(e);
    });
    this.player.on("authentication_error", (e) => {
      console.error(e);
      this.setState({ loggedIn: false });
    });
    this.player.on("account_error", (e) => {
      console.error(e);
    });
    this.player.on("playback_error", (e) => {
      console.error(e);
    });

    // Playback status updates
    this.player.on("player_state_changed", (state) =>
      this.onStateChanged(state)
    );

    this.player.on("ready", async (data) => {
      let { device_id } = data;

      await this.setState({ deviceId: device_id });
      this.playUri({
        playerInstance: this.player,
        spotify_uri: this.props.uri,
      });
    });
  }

  onStateChanged(state) {
    // if we're no longer listening to music, we'll get a null state.
    if (state !== null) {
      const {
        current_track: currentTrack,
        position,
        duration,
      } = state.track_window;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists
        .map((artist) => artist.name)
        .join(", ");
      const playing = !state.paused;
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        playing,
      });
    }
  }

  // transferPlaybackHere() {
  //   const { deviceId, token } = this.state;
  //   fetch("https://api.spotify.com/v1/me/player", {
  //     method: "PUT",
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       device_ids: [deviceId],
  //       play: true,
  //     }),
  //   });
  // }

  playUri = ({
    spotify_uri,
    playerInstance: {
      _options: { getOAuthToken, id },
    },
  }) => {
    getOAuthToken((access_token) => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: "PUT",
        body: JSON.stringify({ uris: [spotify_uri] }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
    });
  };

  onPrevClick() {
    this.props.setSong(
      this.getPrevSong(
        this.props.currentSong,
        this.props.currentPlayingPlaylist
      )
    );
  }

  onPlayClick() {
    this.player.togglePlay();
  }

  onNextClick() {
    this.props.setSong(
      this.getNextSong(
        this.props.currentSong,
        this.props.currentPlayingPlaylist
      )
    );
  }

  seekbarCallback = (childData) => {
    if (this.state.trackName !== "") {
      this.player.seek(childData * 1000);
      this.player.resume();
    }
  };

  // When spotify song finishes
  endOfSongCallback = (position) => {
    if (
      Math.trunc(this.props.duration) !== 0 &&
      position === Math.trunc(this.props.duration / 1000) - 1
    ) {
      this.onNextClick();
    }
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

  render() {
    const { artistName, trackName, playing } = this.state;

    return (
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
            {trackName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{
              width: "15vw",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {artistName}
          </Typography>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton color="primary" onClick={() => this.onPrevClick()}>
              <SkipPreviousIcon fontSize="large" />
            </IconButton>
            <IconButton color="primary" onClick={() => this.onPlayClick()}>
              {playing ? (
                <PauseCircleFilledIcon fontSize="large" />
              ) : (
                  <PlayCircleFilledWhiteIcon fontSize="large" />
                )}
            </IconButton>
            <IconButton color="primary" onClick={() => this.onNextClick()}>
              <SkipNextIcon fontSize="large" />
            </IconButton>
          </div>
          <div>
            <div>
              {this.state.trackName !== "" ? (
                <SeekBar
                  duration={this.props.duration / 1000}
                  parentCallback={this.seekbarCallback}
                  paused={!this.state.playing}
                  endOfSongCallback={this.endOfSongCallback}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpotifyPlayer;
