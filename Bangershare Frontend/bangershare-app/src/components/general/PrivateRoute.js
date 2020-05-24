import React from "react";
import { Route, Redirect } from "react-router-dom";

// component checks whether a user has logged into both spotify and bangershare if not it will
// redirect them to the correct page
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
