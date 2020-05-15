import React from "react";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import LogoDisplay from "./LogoDisplay";
import LoginSignUpToggle from "./LoginSignUpToggle";

const Header = (props) => {
  const { handleSignupClick } = props;

  return (
    <Container>
      <Grid>
        <Row size={1}>
          <LogoDisplay />
        </Row>
        <Row size={4}>
          <LoginSignUpToggle handleSignupToggle={handleSignupClick} />
        </Row>
      </Grid>
    </Container>
  );
};

export default Header;
