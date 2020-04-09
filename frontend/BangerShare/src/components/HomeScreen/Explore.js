import * as React from "react";
import { SafeAreaView } from "react-native";
import { Container, Card, CardItem, Body, Left, Text } from "native-base";

import Carousel from "react-native-snap-carousel";

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      playlists: [
        { playlist: "playlist1", owner: "owner1" },
        { playlist: "playlist2", owner: "owner2" },
        { playlist: "playlist3", owner: "owner3" },
        { playlist: "playlist4", owner: "owner4" },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <Container
        style={{
          borderRadius: 5,
          height: 100,
          padding: 15,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Card>
          <CardItem button onPress={() => alert(item.playlist)}>
            <Left>
              <Body>
                <Text>{item.playlist}</Text>
                <Text note>{item.owner}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Container>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
        <Container style={{ flex: 0.5 }}>
          <Text>Explore</Text>
        </Container>
        <Container
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.playlists}
            sliderWidth={100}
            itemWidth={250}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </Container>
      </SafeAreaView>
    );
  }
}
