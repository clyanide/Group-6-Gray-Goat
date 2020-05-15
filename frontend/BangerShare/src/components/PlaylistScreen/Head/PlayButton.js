import React from "react";

import { Text, View } from "react-native";
import { Button, Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

const PlayButton = () => {

  return (
    <Container>
      <Grid>
        <Col>
          <Button>
            <Text>Play</Text>
          </Button>
        </Col>
      </Grid>
    </Container>
  );
};

export default PlayButton;
