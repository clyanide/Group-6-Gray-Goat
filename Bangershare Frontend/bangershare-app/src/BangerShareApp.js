import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import RequireLogin from './containers/LoginPage/RequireLogin';


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