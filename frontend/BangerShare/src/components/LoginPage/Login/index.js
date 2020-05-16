import React, { useState, useEffect } from "react";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import InputField from "./InputField";
import StaySignedInToggle from "./StaySignedInToggle";
import LoginButton from "../../../containers/LoginButton";

const Login = (props) => {

  const { userInfo, setPassword, setUsename } = props;

  return (
    <Container>
      <Grid>
        <Row size={2}>
          <InputField handlePasswordChange={setPassword} handleUsernameChange={setUsename} userInfo={userInfo} />
        </Row>
        <Row size={2}>
          <StaySignedInToggle />
        </Row>
        <Row size={9}>
          <LoginButton userInfo={userInfo} />
        </Row>
      </Grid>
    </Container>
  )
};

export default Login;
