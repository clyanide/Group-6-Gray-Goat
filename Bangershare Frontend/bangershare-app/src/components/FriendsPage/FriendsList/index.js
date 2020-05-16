import React from "react";
import { List } from "semantic-ui-react";

const FriendsList = () => {
  return (
    <List link>
      <List.Item as="a">Clayton Lan</List.Item>
      <List.Item as="a">Bryan Ang</List.Item>
      <List.Item as="a">Thomas Zhu</List.Item>
    </List>
  );
};

export default FriendsList;
