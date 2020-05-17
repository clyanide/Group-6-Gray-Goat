import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import LoginForm from "../../containers/LoginPage/LoginForm"

const LoginPage = () => {
  const [isSignUp, setSignUp] = useState(false);

  const handleToggle = (boolean) => {
    setSignUp(boolean);
  };

  return (
    <>
      <Button.Group>
        <Button onClick={() => handleToggle(false)} disabled={!isSignUp}>
          Login
        </Button>
        <Button onClick={() => handleToggle(true)} disabled={isSignUp}>
          Signup
        </Button>
      </Button.Group>
      <LoginForm isSignUp={isSignUp} />
    </>
  );
};

export default LoginPage;
