import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage"
import LoginPage from "./containers/LoginPage";
import FriendsPage from "./components/FriendsPage"
// import RequireLogin from "./containers/LoginPage/RequireLogin";
import "semantic-ui-css/semantic.min.css";
import { history } from "./store"
import { ConnectedRouter } from 'connected-react-router'
import { Button } from "semantic-ui-react";

const BangerShareApp = (props) => {
  return (
    <div>
      <ConnectedRouter history={history}>
        {/* <Route path="/" component={RequireLogin}/> */}
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/friends" component={FriendsPage} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
};

export default BangerShareApp;
