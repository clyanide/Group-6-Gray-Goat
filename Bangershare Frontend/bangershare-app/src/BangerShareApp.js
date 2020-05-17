import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import RequireLogin from "./containers/LoginPage/RequireLogin";
import "semantic-ui-css/semantic.min.css";
import { history } from "./store"
import { ConnectedRouter } from 'connected-react-router'

const BangerShareApp = () => {
  return (
    <div>
      <ConnectedRouter history={history}>
        <RequireLogin />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={() => <p>Hello</p>} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
};

export default BangerShareApp;
