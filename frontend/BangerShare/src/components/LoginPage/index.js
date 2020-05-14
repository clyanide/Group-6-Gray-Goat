import React, { useState } from "react";
import { Container } from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";
import Header from "./Header";
import Login from "./Login";
import Signup from "./SignUp";


const LoginPage = () => {

  const [isSignUp, setSignUp] = useState(false);

  const toggleSignup = () => {
      setSignUp(!isSignUp)
  }

  return (
    <Container>
      <Grid>
        <Row size={2}>
          <Header handleSignupClick={toggleSignup}/>
        </Row>
        <Row size={3}>
          {isSignUp && <Signup />}
          {!isSignUp && <Login />}
        </Row>
      </Grid>
    </Container>
  )
};

export default LoginPage;