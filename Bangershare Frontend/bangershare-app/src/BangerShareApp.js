import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import FriendsPage from "./containers/FriendsPage";
import PlaylistPage from "./containers/PlaylistPage";
import RequireLogin from "./containers/LoginPage/RequireLogin";
import "semantic-ui-css/semantic.min.css";
import { history } from "./store";
import { ConnectedRouter } from "connected-react-router";

const BangerShareApp = () => {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" component={RequireLogin} />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/friends" component={FriendsPage} />
        <Route path="/playlist" component={PlaylistPage} />
      </Switch>
    </ConnectedRouter>
  );
};

export default BangerShareApp;
