import React from "react";
import { Container, Text } from "native-base";
import Constants from "expo-constants";
import HomeScreen from "./components/HomeScreen";
import LoginPage from "./components/LoginPage";
import PlaylistScreen from "./components/PlaylistScreen";

const BangerShareApp = () => (
  <Container style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
    <PlaylistScreen />
  </Container>
);

export default BangerShareApp;
