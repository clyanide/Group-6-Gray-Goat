import React, { useState, useEffect } from "react";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import InputField from "./InputField";
import StaySignedInToggle from "./StaySignedInToggle";
import LoginButton from "./LoginButton";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  })

  const setUsename = (e) => {
    setLoginInfo({
      ...loginInfo,
      username: e.nativeEvent.text
    });
  }

  const setPassword = (e) => {
    setLoginInfo({
      ...loginInfo,
      password: e.nativeEvent.text
    });
  }

  // useEffect(() => {
  // }, [loginInfo])

  return (
    <Container>
      <Grid>
        <Row size={2}>
          <InputField handlePasswordChange={setPassword} handleUsernameChange={setUsename} loginInfo={loginInfo} />
        </Row>
        <Row size={2}>
          <StaySignedInToggle />
        </Row>
        <Row size={9}>
          <LoginButton loginInfo={loginInfo} />
        </Row>
      </Grid>
    </Container>
  )
};

export default Login;
