import React from "react";
import { Container, Text } from "native-base";
import Constants from "expo-constants";
import HomeScreen from "./components/HomeScreen";
import FriendsScreen from "./containers/FriendsScreen";

const BangerShareApp = (props) => {
  const { accessToken } = props;

  console.log(accessToken);

  return (
    <Container style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      {accessToken === "" ?
        <LoginPage />
        :
        <HomeScreen />
      }
    </Container>
  );
}

export default BangerShareApp;
