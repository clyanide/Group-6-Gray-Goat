import React, { useState } from "react";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import SignupButton from "../../../containers/SignupButton";
import SignupField from "./SignupField";

const Signup = (props) => {
  const { userInfo, setPassword, setUsename, setEmail } = props;

  return (
    <Container>
      <Grid>
        <Row size={1}>
          <SignupField handlePasswordChange={setPassword} handleUsernameChange={setUsename} handleEmailChange={setEmail} userInfo={userInfo} />
        </Row>
        <Row size={2}>
          <SignupButton userInfo={userInfo} />
        </Row>
      </Grid>
    </Container>
  )
};

export default Signup;
