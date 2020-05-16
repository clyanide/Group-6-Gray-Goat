import React from "react";
import { Container, Text } from "native-base";
import Constants from "expo-constants";
import HomeScreen from "./components/HomeScreen";
import FriendsScreen from "./containers/FriendsScreen";

const BangerShareApp = () => (
  <Container style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
    <FriendsScreen />
  </Container>
);

export default BangerShareApp;
