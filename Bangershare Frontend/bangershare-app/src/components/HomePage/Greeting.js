import React from "react";
import { Typography } from "@material-ui/core";

const Greeting = () => {
  return (
    <Typography variant="h6" style={{ marginTop: "1vh", marginLeft: "1vw" }}>
      Welcome <strong>{localStorage.getItem("username")}</strong>
    </Typography>
  );
};

export default Greeting;
