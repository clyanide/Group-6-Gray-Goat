import React, { useEffect } from "react";
import { Sidebar } from "semantic-ui-react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import PeopleIcon from "@material-ui/icons/People";

const AppSideBar = (props) => {
  const {
    open,
    onClose,
    userPlaylists,
    setCurrentPlaylist,
    setProfileUser,
    getPlaylist,
  } = props;

  // fetches playlists of the user to populate list
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      getPlaylist();
    }
  }, [getPlaylist]);

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
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#7d12ff" }}>
            <HomeIcon style={{ fill: "white" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h5">Home</Typography>
        </ListItemText>
      </ListItem>
      <ListItem button onClick={() => handleProfileClick()}>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#7d12ff" }}>
            <PersonIcon style={{ fill: "white" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h5">Profile</Typography>
        </ListItemText>
      </ListItem>
      <ListItem button onClick={() => goTo("/friends")}>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#7d12ff" }}>
            <PeopleIcon style={{ fill: "white" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h5">Friends</Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant="h5">Your Playlists</Typography>
        </ListItemText>
      </ListItem>
      <Divider />
      <div
        style={{
          overflowY: "scroll",
          height: "58vh",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {userPlaylists.map((playlist) => (
          <>
            <ListItem button onClick={() => handlePlaylistClick(playlist)}>
              <ListItemText variant="h6">{playlist.name}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </div>
    </Sidebar>
  );
};

export default AppSideBar;
