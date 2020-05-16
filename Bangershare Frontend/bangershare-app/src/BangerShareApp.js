import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FriendsPage from "./components/FriendsPage";
import "semantic-ui-css/semantic.min.css";

const BangerShareApp = (props) => {
  const { accessToken } = props;

  return (
    <div>
      <Router>
        <FriendsPage />
      </Router>
    </div>
  );
};

export default BangerShareApp;
