import React, { Component } from "react";
import { Button, Paper } from "@material-ui/core";

import SpotifyWebApi from "spotify-web-api-js";
import Logo from './spotifyLogo.svg';
import Icon from '@material-ui/core/Icon';
import AccountCircle from '@material-ui/icons/AccountCircle';

const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
      this.props.setSpotifyToken(token);
      this.props.push("/home");
    }
    this.state = {
      loggedIn: token ? true : false,
    };
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    return (
      <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
      variant="outlined"
      elevation={2}
      style={{
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "20vh",
        maxWidth: "1000px",
        width: "100%",
        height: "300px"
      }}
    >
      <div className="App">
        <Button
        variant="contained"
        color="primary"
        size="large"
        href="https://bangershareauth.azurewebsites.net/login"
        style={{
          borderRadius: "30px",
          width: "250px",
          height: "60px",
          backgroundColor: "#1DB954",
          fontSize: "15px"
        }}
      >
        Login to Spotify
      </Button>
      </div>
      </Paper>
      </div>
    );
  }
}

export default App;
