import React from "react";
import { List, Typography, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';


const FriendsList = (props) => {
  const { friends, onFriendClick, deleteFriend } = props;
  return (
    <List>
      {friends && friends.length > 0 ? (
        friends.map((friend) => (
          <ListItem button divider onClick={() => onFriendClick(friend.username)}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={friend.username} />
            <ListItemSecondaryAction>
              <ListItemIcon onClick={() => deleteFriend(friend.username)}>
                <IconButton>
                  <PersonAddDisabledIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemSecondaryAction>
          </ListItem>
        ))) :
        <Typography>
          You have no friends
        </Typography>
      }
    </List>

  );
};

export default FriendsList;
