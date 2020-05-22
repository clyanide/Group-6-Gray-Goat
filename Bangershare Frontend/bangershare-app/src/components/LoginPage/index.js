import React, { useState } from "react";
import LoginForm from "../../containers/LoginPage/LoginForm";
import { Button, ButtonGroup, Paper } from "@material-ui/core";

const LoginPage = () => {
  const [isSignUp, setSignUp] = useState(false);

  const handleToggle = (boolean) => {
    setSignUp(boolean);
  };

  return (
    <Paper variant="outlined" elevation={2}>
      <ButtonGroup color="primary" variant="contained">
        <Button
          disabled={!isSignUp}
          onClick={() => handleToggle(false)}
          color="primary"
        >
          Login
        </Button>
        <Button
          disabled={isSignUp}
          onClick={() => handleToggle(true)}
          color="primary"
        >
          Register
        </Button>
      </ButtonGroup>
      <LoginForm isSignUp={isSignUp} />
    </Paper>
  );
};

export default LoginPage;
