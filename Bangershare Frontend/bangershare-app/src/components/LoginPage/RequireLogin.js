import React from "react";
import { Redirect } from "react-router-dom";

const RequireLogin = (props) => {
  const { accessToken } = props;

  return <>{accessToken === "" ? <Redirect to="/login" /> : null}</>;
};

export default RequireLogin;
