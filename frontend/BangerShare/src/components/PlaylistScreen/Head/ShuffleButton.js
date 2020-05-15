import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

const ShuffleButton = () => {

  return (
    <Container>
      <Grid>
        <Col>
          <Button>
            <Text>
              images
            </Text>
          </Button>
        </Col>
      </Grid>
    </Container>
  );
};

export default ShuffleButton;
