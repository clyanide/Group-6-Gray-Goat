import React from "react";
import { Container, Header } from "native-base";
import { View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import LogoDisplay from "./LogoDisplay";
import AddButton from "./AddButton";
import BackButton from "./BackButton";
import PlayButton from "./PlayButton";
import SearchButton from "./SearchButton";
import ShuffleButton from "./ShuffleButton";

const Head = () => {
  return (
    <Container>
      <Grid>
        <Row size={1}>
          <Col size={1}>
            <BackButton />
          </Col>
          <Col size={1}>
            <LogoDisplay />
          </Col>
          <Col size={1}></Col>
        </Row>

        <Row size={1}>
          <Col size={1}>
            <ShuffleButton />
          </Col>
          <Col size={1}>
            <PlayButton />
          </Col>
          <Col size={1}>
            <SearchButton />
          </Col>
          <Col size={1}>
            <AddButton />
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Head;
