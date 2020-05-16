import React from "react";
import { Container, Text } from "native-base";
import { SearchBar, Icon } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";

const FriendsHeader = ({ currentView, toggleView }) => (
  <Container>
    <Grid>
      <Col>
        <Row>
          <Text>My Friends</Text>
        </Row>
        <Row>
          <SearchBar
            placeholder="Search..."
            value={""}
            containerStyle={{
              width: "100%",
              backgroundColor: "transparent",
              borderTopColor: "transparent",
              borderBottomColor: "transparent",
            }}
            inputContainerStyle={{
              width: "100%",
              backgroundColor: "transparent",
            }}
          />
        </Row>
      </Col>
      <Col>
        <Row></Row>
        <Row>
          <Container
            style={{ flexDirection: "row", justifyContent: "flex-end" }}
          >
            <Icon
              reverse
              name="group"
              color="#517fa4"
              onPress={() => toggleView()}
            />
            <Icon reverse name="add" onPress={() => console.log("hello")} />
          </Container>
        </Row>
      </Col>
    </Grid>
  </Container>
);

export default FriendsHeader;
