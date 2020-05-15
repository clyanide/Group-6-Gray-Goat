import React, { Component, useState } from 'react';
import { Container} from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";
import Head from "./Head";
import Songs from "./Songs";
import Suggestions from "./Suggestions";
const PlaylistScreen = () => {

  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleShowSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  return (
    <Container>
      <Grid>
        {/* No row size for formatting */}
        <Head />

        <Row size={3}>
          <Songs />
        </Row>

      {/* This is supposed to bring the suggestion button up and town to show suggestions */}
        {showSuggestions && <Row size={4}>
          <Suggestions handleSuggestionToggle={toggleShowSuggestions} />
        </Row>}
        {!showSuggestions && <Row size={1}>
          <Suggestions handleSuggestionToggle={toggleShowSuggestions} />
        </Row>}

      </Grid>
    </Container>
  );

};

export default PlaylistScreen;
