import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';

export default class StaySignedInToggle extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem>
            <CheckBox checked={false}/>
            <Body>
              <Text>Stay logged in</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }

}