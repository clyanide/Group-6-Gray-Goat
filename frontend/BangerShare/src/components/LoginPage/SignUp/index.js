import React from "react";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import SignupButton from "./SignupButton";
import SignupField from "./SignupField";

const Signup = () => (
  <Container>
    <Grid>
      <Row size={1}>
        <SignupField />
      </Row>
      <Row size={2}>
        <SignupButton />
      </Row>
    </Grid>
  </Container>
);

export default Signup;
