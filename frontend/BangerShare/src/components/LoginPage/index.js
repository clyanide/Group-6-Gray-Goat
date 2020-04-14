import React from "react";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import LogoDisplay from "./LogoDisplay";
import InputField from "./InputField";
import LoginButton from "./LoginButton";
import StaySignedInToggle from "./StaySignedInToggle"
import LoginSignUpToggle from "./LoginSignUpToggle";

const LoginPage = () => (
  <Container>
    <Grid>
      <Row size={2}>
        <LogoDisplay/>
      </Row>
      <Row size={1}>
        <LoginSignUpToggle />
      </Row>
      <Row size={1}>
        <InputField />
      </Row>
      <Row size={1}>
        <StaySignedInToggle />
      </Row>
      <Row size={1}>
        <LoginButton />
      </Row>
    </Grid>
  </Container>
);

export default LoginPage;