import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import RequireLogin from "./containers/LoginPage/RequireLogin";
import "semantic-ui-css/semantic.min.css";
import MusicPlayer from "./components/MusicPlayer";

const BangerShareApp = () => {
  return (
    <div>
      <MusicPlayer />
    </div>
  );
};

export default BangerShareApp;
