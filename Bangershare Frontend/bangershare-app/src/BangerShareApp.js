import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginPage from "./containers/LoginPage"
import RequireLogin from "./containers/LoginPage/RequireLogin";
import 'semantic-ui-css/semantic.min.css'

const BangerShareApp = () => {
    return (
        <div>
            <Router>
                <RequireLogin />
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/hello" component={() => <p>Hello</p>} />
                </Switch>
            </Router>
        </div>
    );
}

export default BangerShareApp;
