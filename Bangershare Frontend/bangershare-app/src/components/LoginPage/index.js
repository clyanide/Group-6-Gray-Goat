import React, { useState } from "react";
import LoginForm from "../../containers/LoginPage/LoginForm";
import { Button, ButtonGroup, Paper } from "@material-ui/core";

const LoginPage = () => {
  const [isSignUp, setSignUp] = useState(false);

  const handleToggle = (boolean) => {
    setSignUp(boolean);
  };

  return (
    <Paper variant="outlined" elevation={2} style={{
      textAlign:"center"
    }}>
      <ButtonGroup color="primary" variant="contained" style={{
          marginTop: "50px",
          width:"100%",
          maxWidth:"200px"
        }}>
        <Button
          disabled={!isSignUp}
          onClick={() => handleToggle(false)}
          color="primary"
          style={{
            width:"50%"
          }}
        >
          Login
        </Button>
        <Button
          disabled={isSignUp}
          onClick={() => handleToggle(true)}
          color="primary"
          style={{
            width:"50%"
          }}
        >
          Register
        </Button>
      </ButtonGroup>
      <LoginForm isSignUp={isSignUp} />
    </Paper>
  );
};

export default LoginPage;
