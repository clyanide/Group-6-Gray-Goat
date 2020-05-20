import React from "react";
import { Redirect } from "react-router-dom";

const RequireLogin = () => {
  return (
    <>
      {localStorage.getItem("token") === null ? <Redirect to="/login" /> : null}
    </>
  );
};

export default RequireLogin;
