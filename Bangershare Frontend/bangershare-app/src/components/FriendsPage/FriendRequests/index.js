import React from "react";
import { List, Button } from "semantic-ui-react";

const FriendRequests = (props) => {
  const { pendingFriends, onFriendClick } = props;

  return (
    <List link>
      {pendingFriends && pendingFriends.length > 0 ? (
        pendingFriends.map((friend) => (
          <>
            <List.Item key={friend.receiverUsername} onClick={() => onFriendClick(friend.receiverUsername)}>
              {friend.receiverUsername}
            </List.Item>
            <Button.Group>
              <Button>Accept</Button>
              <Button>Decline</Button>
            </Button.Group>
          </>
        ))
      ) : (
          <List.Item>No pending friends</List.Item>
        )}
    </List>
  );
};

export default FriendRequests;
