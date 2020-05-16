import React, { useState } from "react";
import { Text, Container, View, Button } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { FlatList, StyleSheet } from "react-native";

import { ListItem } from "react-native-elements";

const SuggestionList = () => {
  const mock = [
    {
      id: 1,
      isPending: false,
      Hearts: 3,
      Name: "Song1",
      Artist: "Artist1",
      Link: "Link1",
    },
    {
      id: 2,
      isPending: false,
      Hearts: 2,
      Name: "Song2",
      Artist: "Artist2",
      Link: "Link2",
    },
    {
      id: 3,
      isPending: false,
      Hearts: 5,
      Name: "Song3",
      Artist: "Artist3",
      Link: "Link3",
    },
    {
      id: 4,
      isPending: true,
      Hearts: 10,
      Name: "Song4",
      Artist: "Artist4",
      Link: "Link4",
    },
    {
      id: 5,
      isPending: true,
      Hearts: 0,
      Name: "Song5",
      Artist: "Artist5",
      Link: "Link5",
    },
    {
      id: 6,
      isPending: true,
      Hearts: 4,
      Name: "Song6",
      Artist: "Artist6",
      Link: "Link6",
    },
  ];

  //Error Flatlist doesn't scroll
  return (
    <Container>
      {mock
        .filter((opt) => !opt.isPending)
        .map((l, i) => (
          //NOTE TEXT IN BUTTONS BREAKS STUFF. USE IMAGES
          <ListItem
            leftElement={
              <>
                <Button></Button>
              </>
            }
            key={i}
            title={l.Name}
            subtitle={l.Artist}
            rightElement={
              <>
                <Button></Button>
              </>
            }
            bottomDivider
          />
        ))}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingLeft: 40,
  },
  list: {},
});

export default SuggestionList;
