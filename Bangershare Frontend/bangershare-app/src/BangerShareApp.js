import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import FriendsPage from "./containers/FriendsPage";
import RequireLogin from "./containers/LoginPage/RequireLogin";
import "semantic-ui-css/semantic.min.css";
import { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import SpotifyLoginPage from "./containers/SpotifyLoginPage";
import SpotifyPlayer from "./containers/SpotifyPlayer";
import YoutubePlayer from "./components/MusicPlayer/YoutubePlayer";
import MusicPlayer from "./components/MusicPlayer";

const BangerShareApp = () => {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" component={SpotifyLoginPage} />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/friends" component={FriendsPage} />
        <Route path="/spotify" component={SpotifyPlayer} />
        <Route path="/spotifyauth" component={SpotifyLoginPage} />
        <Route path="/player" component={MusicPlayer} />
      </Switch>
    </ConnectedRouter>
  );
};

export default BangerShareApp;
