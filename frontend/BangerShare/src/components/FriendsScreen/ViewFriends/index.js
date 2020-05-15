import React from "react";
import { ListItem } from "react-native-elements";
import { Container } from "native-base";

const mockFriendsList = [
  {
    name: "Bryan Ang",
  },

  {
    name: "Thomas Zhu",
  },
];

const ViewFriends = () => {
  return (
    <Container>
      {mockFriendsList.map((l, i) => (
        <ListItem
          key={i}
          title={l.name}
          bottomDivider
          onPress={() => console.log(l.name + " eats @$$")}
        />
      ))}
    </Container>
  );
};

export default ViewFriends;
