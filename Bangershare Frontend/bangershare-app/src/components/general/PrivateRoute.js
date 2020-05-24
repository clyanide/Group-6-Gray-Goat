import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const bangerShareToken = localStorage.getItem("token");
  const spotifyToken = localStorage.getItem("spotifyToken");
  return (
    <Route
      {...rest}
      render={(props) =>
        bangerShareToken !== null && spotifyToken !== null ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: bangerShareToken === null ? "/login" : "/spotifyauth",
                state: { from: props.location },
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;
