import React from "react";
import { Container } from "native-base";
import FriendsHeader from "../../containers/FriendsHeader";
import ViewFriends from "./ViewFriends";
import FriendRequests from "./FriendRequests";

const FriendsScreen = (currentView) => (
  <Container>
    <FriendsHeader />
    {currentView.currentView ? <ViewFriends /> : <FriendRequests />}
  </Container>
);

export default FriendsScreen;
