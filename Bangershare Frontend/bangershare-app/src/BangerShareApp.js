import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


const BangerShareApp = (props) => {
    const { accessToken } = props;

    return (
        <div>
            <Router>
                <p>HELLO</p>
            </Router>
        </div>
    );
}

export default BangerShareApp;