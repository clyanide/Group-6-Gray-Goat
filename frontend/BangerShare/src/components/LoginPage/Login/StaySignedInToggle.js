import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
} from "native-base";

const StaySignedInToggle = () => {
  return (
    <Container>
      <Content>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Stay logged in</Text>
          </Body>
        </ListItem>
      </Content>
    </Container>
  );
}

export default StaySignedInToggle;
