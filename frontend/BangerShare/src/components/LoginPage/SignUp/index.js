import React, { useState } from "react";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import SignupButton from "../../../containers/SignupButton";
import SignupField from "./SignupField";

const Signup = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: "",
    email: ""
  })

  const setUsename = (e) => {
    setSignUpInfo({
      ...signUpInfo,
      username: e.nativeEvent.text
    });
  }

  const setPassword = (e) => {
    setSignUpInfo({
      ...signUpInfo,
      password: e.nativeEvent.text
    });
  }

  const setEmail = (e) => {
    setSignUpInfo({
      ...signUpInfo,
      email: e.nativeEvent.text
    });
  }

  return (
    <Container>
      <Grid>
        <Row size={1}>
          <SignupField handlePasswordChange={setPassword} handleUsernameChange={setUsename} handleEmailChange={setEmail} signUpInfo={signUpInfo} />
        </Row>
        <Row size={2}>
          <SignupButton signUpInfo={signUpInfo} />
        </Row>
      </Grid>
    </Container>
  )
};

export default Signup;
