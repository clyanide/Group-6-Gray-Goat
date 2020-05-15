import React from "react";
import { Text, Container } from "native-base";

const Greeting = (props) => {
  const { currentUser } = props;

  return (
    <Container>
      <Text>Hello {currentUser}</Text>
    </Container>
  )
}

export default Greeting;
