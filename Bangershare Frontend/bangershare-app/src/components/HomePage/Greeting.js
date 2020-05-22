import React from "react";
import { Typography } from "@material-ui/core";

const Greeting = () => {
  return (
    <Typography variant="h6">
      Hello <strong>{localStorage.getItem("username")}</strong>
    </Typography>
  );
};

export default Greeting;
