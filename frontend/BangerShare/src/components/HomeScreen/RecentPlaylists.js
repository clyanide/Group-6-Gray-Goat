import React from "react";
import { Image } from "react-native";
import {
  Container,
  Text,
  Content,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
} from "native-base";

const playlists = [
  { playlist: "playlist1", owner: "owner1" },
  { playlist: "playlist2", owner: "owner2" },
  { playlist: "playlist3", owner: "owner3" },
  { playlist: "playlist4", owner: "owner4" },
];

const RecentPlaylists = () => (
  <Container>
    <Text>Recent Playlists</Text>
    <Container
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {playlists.map((playlist) => (
        <Container
          key={playlist.playlist}
          style={{
            height: "10.5%",
            width: 100,
            minWidth: "50%",
          }}
        >
          <Content>
            <Card>
              <CardItem button onPress={() => alert(playlist.playlist)}>
                <Left>
                  <Body>
                    <Text>{playlist.playlist}</Text>
                    <Text note>{playlist.owner}</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </Container>
      ))}
    </Container>
  </Container>
);

export default RecentPlaylists;
