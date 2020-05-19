import React from "react";
import { Icon, Menu, Sidebar, List } from "semantic-ui-react";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import { Typography } from "@material-ui/core";

const AppSideBar = (props) => {
  const { open, onClose, userPlaylists, setCurrentPlaylist, user, setProfileUser } = props;

  const goTo = (link) => {
    props.push(link);
    onClose(false);
  };

  const handlePlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
    goTo("/playlist");
  };

  const handleProfileClick = () => {
    setProfileUser(user.name)
    goTo("/profile")
  }

  return (
    <Sidebar
      as={Menu}
      animation="push"
      direction="left"
      icon="labeled"
      visible={open}
      width="thin"
      vertical
      onHide={() => onClose(false)}
    >
      <Menu.Item as="a" onClick={() => goTo("/home")}>
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a" onClick={() => handleProfileClick()} >
        <Icon name="user" />
        Profile
      </Menu.Item>
      <Menu.Item as="a" onClick={() => goTo("/friends")}>
        <Icon name="group" />
        Friends
      </Menu.Item>
      <Menu.Item>
        <QueueMusicIcon />
        <Menu.Header>Your Playlists</Menu.Header>
        <List>
          {userPlaylists && userPlaylists.length > 0 ? (
            userPlaylists.map((playlist) => (
              <List.Item as="a" onClick={() => handlePlaylistClick(playlist)}>
                <Typography as="a">{playlist.name}</Typography>
              </List.Item>
            ))
          ) : (
              <p>You have no playlist</p>
            )}
        </List>
      </Menu.Item>
    </Sidebar >
  );
};

export default AppSideBar;
