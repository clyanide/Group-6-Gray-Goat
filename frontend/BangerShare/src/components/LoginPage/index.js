import React, { useState } from "react";
import { Container } from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";
import Header from "./Header";
import Login from "./Login";
import Signup from "./SignUp";

const LoginPage = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
  });

  const setUsename = (e) => {
    setUserInfo({
      ...userInfo,
      username: e.nativeEvent.text,
    });
  };

  const setPassword = (e) => {
    setUserInfo({
      ...userInfo,
      password: e.nativeEvent.text,
    });
  };

  const setEmail = (e) => {
    setUserInfo({
      ...userInfo,
      email: e.nativeEvent.text,
    });
  };
  const toggleSignup = () => {
    setUserInfo({
      username: "",
      password: "",
      email: "",
    });
    setSignUp(!isSignUp);
  };

  return (
    <Container>
      <Grid>
        <Row size={2}>
          <Header handleSignupClick={toggleSignup} />
        </Row>
        <Row size={3}>
          {isSignUp && (
            <Signup
              userInfo={userInfo}
              setPassword={setPassword}
              setUsename={setUsename}
              setEmail={setEmail}
            />
          )}
          {!isSignUp && (
            <Login
              userInfo={userInfo}
              setPassword={setPassword}
              setUsename={setUsename}
            />
          )}
        </Row>
      </Grid>
    </Container>
  );
};

export default LoginPage;
