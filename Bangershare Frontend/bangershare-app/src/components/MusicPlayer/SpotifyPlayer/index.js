import React, { Component } from "react";
import SeekBar from "./SeekBar";

class MusicPlayer extends Component {
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

    this.playerCheckInterval = null;

    if (this.state.token !== "") {
      this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
    }
  }

  checkForPlayer() {
    const { token } = this.state;

    if (window.Spotify !== null) {
      clearInterval(this.playerCheckInterval);
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
      console.log("Let the music play on!");
      await this.setState({ deviceId: device_id });
      // this.transferPlaybackHere();
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
    this.player.previousTrack();
  }

  onPlayClick() {
    console.log(this.state.duration);
    this.player.togglePlay();
  }

  onNextClick() {
    this.player.nextTrack();
  }

  callbackFunction = (childData) => {
    console.log(childData);
    this.player.seek(childData * 1000);
  };

  render() {
    const {
      token,
      loggedIn,
      artistName,
      trackName,
      albumName,
      error,
      position,
      duration,
      playing,
    } = this.state;

    const currentPlayer = this.player;
    const uri = "spotify:track:3FjYSZhuMB4Ujv04AmHi5e";
    const uriArgs = { playerInstance: currentPlayer, spotify_uri: uri };

    return (
      <div className="App">
        {error && <p>Error: {error}</p>}

        <div>
          <p>Artist: {artistName}</p>
          <p>Track: {trackName}</p>
          <p>Album: {albumName}</p>
          <p>
            <button onClick={() => this.onPrevClick()}>Previous</button>
            <button onClick={() => this.onPlayClick()}>
              {playing ? "Pause" : "Play"}
            </button>
            <button onClick={() => this.onNextClick()}>Next</button>
            <button onClick={() => this.playUri(uriArgs)}>Play from URI</button>
            {this.state.trackName != "" ? (
              <SeekBar
                duration={60}
                parentCallback={this.callbackFunction}
                paused={!this.state.playing}
              />
            ) : null}
          </p>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
