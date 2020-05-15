import React from "react";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Greeting from "./Greeting";
import RecentPlaylists from "./RecentPlaylists";
import MyPlaylists from "./MyPlaylists";
import Explore from "./Explore";
import Color from "../../containers/Color";

const HomeScreen = () => (
  <Container>
    <Grid>
      <Row size={1}>
        <Color />
        <Greeting />
      </Row>
      <Row size={3}>
        <RecentPlaylists />
      </Row>
      <Row size={2}>
        <MyPlaylists />
      </Row>
      <Row size={2}>
        <Explore />
      </Row>
    </Grid>
  </Container>
);

export default HomeScreen;
