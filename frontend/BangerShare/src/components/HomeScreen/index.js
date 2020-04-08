import React from "react";
import { Container } from "native-base";
import Greeting from "./Greeting";
import RecentPlaylists from "./RecentPlaylists";

const HomeScreen = () => (
  <Container>
    <Greeting />
    <RecentPlaylists />
  </Container>
);

export default HomeScreen;
