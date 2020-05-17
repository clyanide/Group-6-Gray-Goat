import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import RequireLogin from "./containers/LoginPage/RequireLogin";
import "semantic-ui-css/semantic.min.css";
import SpotifyPlayer from "./containers/SpotifyPlayer";
import SpotifyLoginPage from "./containers/SpotifyLoginPage";

const BangerShareApp = () => {
  return (
    <div>
      <SpotifyPlayer />
    </div>
  );
};

export default BangerShareApp;
