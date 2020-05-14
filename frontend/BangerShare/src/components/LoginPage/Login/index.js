import React from "react";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import InputField from "./InputField";
import StaySignedInToggle from "./StaySignedInToggle";
import LoginButton from "./LoginButton";


const Login = () => (
  <Container>
    <Grid>
      <Row size={2}>
        <InputField/>
      </Row>
      <Row size={2}>
        <StaySignedInToggle />
      </Row>
      <Row size={9}>
        <LoginButton />
      </Row>
    </Grid>
  </Container>
);

export default Login;