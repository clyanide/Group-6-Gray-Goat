import React, { Component } from "react";
import { Button, Paper } from "@material-ui/core";

import SpotifyWebApi from "spotify-web-api-js";
import Logo from "./spotifyLogo.png";

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
            //height: "300px"
          }}
        >
          <div className="App">
            <div>
              <h1
                style={{
                  fontSize: "50px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Welcome to Bangershare!
              </h1>
            </div>
            <div>
              <h2
                style={{
                  marginBottom: "20px",
                  fontWeight: "lighter",
                }}
              >
                A &nbsp;<strong>N</strong>ew &nbsp;
                <strong>M</strong>usic &nbsp;<strong>S</strong>haring &nbsp;
                <strong>L</strong>ifestyle
              </h2>
            </div>
            <div>
              <h3
                style={{
                  marginBottom: "20px",
                  fontWeight: "lighter",
                }}
              >
                To continue, please link your account to Spotify
              </h3>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="https://bangershareauth.azurewebsites.net/login"
                startIcon={
                  <img src={Logo} style={{ width: "60px", height: "60px" }} />
                }
                style={{
                  borderRadius: "30px",
                  width: "250px",
                  height: "60px",
                  backgroundColor: "#1DB954",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                Login to Spotify
              </Button>
              <div>
                <h5
                  style={{
                    marginBottom: "20px",
                    fontWeight: "lighter",
                  }}
                >
                  Important note: A Spotify premium account is needed to access
                  full features of BangerShare
                </h5>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
