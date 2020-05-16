import React from "react";
import { ListItem, Button, ButtonGroup, Text } from "react-native-elements";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

const mockFriendRequests = [
  {
    name: "Bryan Ang",
  },

  {
    name: "Thomas Zhu",
  },
];

const FriendRequests = () => {
  return (
    <Container>
      {mockFriendRequests.map((l, i) => (
        <Grid key={i}>
          <Col>
            <ListItem key={i} title={l.name} bottomDivider />
          </Col>
          <Col>
            <Button></Button>
          </Col>
          <Col>
            <Button></Button>
          </Col>
        </Grid>
      ))}
    </Container>
  );
};

export default FriendRequests;
