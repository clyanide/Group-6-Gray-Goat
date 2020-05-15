import React from "react";
import { Container, Text } from "native-base";
import Constants from "expo-constants";
import HomeScreen from "./components/HomeScreen";
import LoginPage from "./components/LoginPage";

const BangerShareApp = () => (
  <Container style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
    <HomeScreen />
  </Container>
);

export default BangerShareApp;
