import React from "react";
import { Sidebar, } from "semantic-ui-react";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import { Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';

const AppSideBar = (props) => {
  const {
    open,
    onClose,
    userPlaylists,
    setCurrentPlaylist,
    setProfileUser,
  } = props;

  const goTo = (link) => {
    props.push(link);
    onClose(false);
  };

  const handlePlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
    goTo("/playlist");
  };

  const handleProfileClick = () => {
    setProfileUser(localStorage.getItem("username"));
    onClose(false);
  };

  return (
    <Sidebar
      as={List}
      animation="push"
      direction="left"
      icon="labeled"
      visible={open}
      vertical
      onHide={() => onClose(false)}
    >
      <ListItem button onClick={() => goTo("/home")}>
        <ListItemIcon>
          <HomeIcon color="primary" fontSize="large" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="h5">
            Home
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem button onClick={() => handleProfileClick()}>
        <ListItemIcon>
          <AccountCircleIcon color="primary" fontSize="large" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="h5">
            Profile
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon color="primary" fontSize="large" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="h5">
            Friends
          </Typography>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon>
          <QueueMusicIcon color="primary" fontSize="large" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="h5">
            Your Playlists
        </Typography>
        </ListItemText>
      </ListItem>
      <Divider />
      {userPlaylists.map(playlist => (
        <>
          <ListItem button onClick={() => handlePlaylistClick(playlist)}>
            <ListItemText variant="h6">
              {playlist.name}
            </ListItemText>
          </ListItem>
          <Divider />
        </>
      ))}
    </Sidebar>
  );
};

export default AppSideBar;
