import React from "react";
import {
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import PersonIcon from "@material-ui/icons/Person";

const FriendsList = (props) => {
  const { friends, onFriendClick, deleteFriend } = props;
  return (
    <List>
      {friends && friends.length > 0 ? (
        friends.map((friend) => (
          <ListItem
            button
            divider
            onClick={() => onFriendClick(friend.username)}
          >
            <ListItemAvatar style={{ paddingLeft: "0.5vw" }}>
              <Avatar style={{ backgroundColor: "#7d12ff" }}>
                <PersonIcon style={{ fill: "white" }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography style={{ paddingLeft: "12px" }} variant="h6">
                  {friend.username}
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <ListItemIcon onClick={() => deleteFriend(friend.username)}>
                <IconButton color="secondary">
                  <PersonAddDisabledIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
        <Typography
          variant="h4"
          style={{ paddingLeft: "1.5vw", paddingTop: "1.5vh" }}
        >
          You seem to have no friends. Try adding some.
        </Typography>
      )}
    </List>
  );
};

export default FriendsList;
