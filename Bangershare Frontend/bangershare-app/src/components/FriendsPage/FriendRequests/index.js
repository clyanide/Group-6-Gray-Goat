import React from "react";
import { List, Typography, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';


const FriendRequests = (props) => {
  const { pendingFriends, onFriendClick, acceptRequest, deleteRequest } = props;

  return (
    <List>
      {pendingFriends && pendingFriends.length > 0 ? (
        pendingFriends.map((friend) => (
          <ListItem button onClick={() => onFriendClick(friend.senderUsername)} divider>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={friend.senderUsername} />
            <ListItemSecondaryAction>
              <ListItemIcon onClick={() => acceptRequest(friend.senderUsername)}>
                <IconButton>
                  <PersonAddIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemIcon onClick={() => deleteRequest(friend.senderUsername)}>
                <IconButton>
                  <PersonAddDisabledIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemSecondaryAction>
          </ListItem>
        )))
        :
        <Typography>
          No Friend Requests
        </Typography>
      }
    </List>
  );
};

export default FriendRequests;
