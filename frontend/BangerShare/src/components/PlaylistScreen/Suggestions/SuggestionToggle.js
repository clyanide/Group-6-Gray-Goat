import React, { useState, Component } from "react";

import { Text, View } from "react-native";
import { Button, Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import SuggestionList from "./SuggestionList";

const SuggestionToggle = (props) => {

  const { handleSuggestionClick } = props;

  const [showSuggestions, setShowSuggestions] = useState(true);

  const toggleShowSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };


  return (
    <Container>
      <Grid>
        <Row>
          <Button flex={1}
            onPress={() => {
              //Hand suggest click breaks it
              //handleSuggestionClick();
              toggleShowSuggestions();
            }}>
            <Text>Suggestion List</Text>
          </Button>
        </Row>
        {showSuggestions && <Row size={8}>
          <SuggestionList />
        </Row>}
      </Grid>
    </Container>
  );
};

export default SuggestionToggle;
