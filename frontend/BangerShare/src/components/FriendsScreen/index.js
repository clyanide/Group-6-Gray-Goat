import React from "react";
import { Container } from "native-base";
import FriendsHeader from "./FriendsHeader";
import ViewFriends from "./ViewFriends";

const FriendsScreen = () => (
  <Container>
    <FriendsHeader />
    <ViewFriends />
  </Container>
);

export default FriendsScreen;
