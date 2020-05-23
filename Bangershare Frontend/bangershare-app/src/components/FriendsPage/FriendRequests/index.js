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
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import PersonIcon from '@material-ui/icons/Person';
import { green } from '@material-ui/core/colors';


const FriendRequests = (props) => {
  const { pendingFriends, onFriendClick, acceptRequest, deleteRequest } = props;

  return (
    <List>
      {pendingFriends && pendingFriends.length > 0 ? (
        pendingFriends.map((friend) => (
          <ListItem
            button
            onClick={() => onFriendClick(friend.senderUsername)}
            divider
          >
            <ListItemAvatar style={{ paddingLeft: "0.5vw" }}>
              <Avatar style={{ backgroundColor: "#7d12ff" }}>
                <PersonIcon style={{ fill: "white" }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Typography style={{ paddingLeft: "12px" }} variant="h6">{friend.senderUsername}</Typography>} />
            <ListItemSecondaryAction>
              <ListItemIcon
                onClick={() => acceptRequest(friend.senderUsername)}
              >
                <IconButton
                  style={{ color: green[500] }}
                >
                  <PersonAddIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemIcon
                onClick={() => deleteRequest(friend.senderUsername)}
              >
                <IconButton
                  color="secondary"
                >
                  <PersonAddDisabledIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
          <Typography variant="h4" style={{ paddingLeft: "1.5vw", paddingTop: "1.5vh" }}>You have no friend requests.</Typography>
        )}
    </List>
  );
};

export default FriendRequests;
