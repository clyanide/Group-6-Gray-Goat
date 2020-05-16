import React from "react";
import { List, Button } from "semantic-ui-react";

const FriendRequests = () => {
  return (
    <List link>
      <List.Item as="a">Clayton Lan</List.Item>
      <Button>Accept</Button>
      <Button>Decline</Button>
      <List.Item as="a">Bryan Ang</List.Item>
      <Button>Accept</Button>
      <Button>Decline</Button>
      <List.Item as="a">Thomas Zhu</List.Item>
      <Button>Accept</Button>
      <Button>Decline</Button>
    </List>
  );
};

export default FriendRequests;
