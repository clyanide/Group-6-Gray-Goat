import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppHeader from "./containers/Header";
import AppSideBar from "./containers/SideBar";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import FriendsPage from "./containers/FriendsPage";
import PlaylistPage from "./containers/PlaylistPage";
import RequireLogin from "./components/LoginPage/RequireLogin";
import ProfilePage from "./containers/ProfilePage";
import SpotifyLoginPage from "./containers/SpotifyLoginPage";
import PrivateRoute from "./components/general/PrivateRoute"
import "semantic-ui-css/semantic.min.css";
import { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { Sidebar } from "semantic-ui-react";

const BangerShareApp = () => {
  const [open, setOpen] = useState(false);

  const handleSetOpen = (bool) => {
    setOpen(bool);
  };

  return (
    <ConnectedRouter history={history}>
      <AppHeader onMenuClick={handleSetOpen} />
      <Sidebar.Pushable>
        <AppSideBar open={open} onClose={handleSetOpen} />
        <RequireLogin />
        <Sidebar.Pusher dimmed={open}>
          <div style={{ height: "85vh" }}>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/spotifyauth" component={SpotifyLoginPage} />
              <PrivateRoute path="/friends" component={FriendsPage} />
              <PrivateRoute path="/playlist" component={PlaylistPage} />
              <PrivateRoute path="/profile" component={ProfilePage} />
              <PrivateRoute
                path="/home" component={HomePage}
              />
              <Redirect exact from="/" to="/home" />
            </Switch>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </ConnectedRouter>
  );
};

export default BangerShareApp;
