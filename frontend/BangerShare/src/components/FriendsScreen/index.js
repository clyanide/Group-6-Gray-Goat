import React from "react";
import { Container } from "native-base";
import FriendsHeader from "./FriendsHeader";
import ViewFriends from "./ViewFriends";
import FriendRequests from "./FriendRequests";

const FriendsScreen = () => (
  <Container>
    <FriendsHeader />
    <FriendRequests />
  </Container>
);

export default FriendsScreen;
