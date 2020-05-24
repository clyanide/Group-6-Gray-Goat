import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const bangerShareToken = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        bangerShareToken !== null ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;
