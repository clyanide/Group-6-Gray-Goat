import React from "react";
import { List } from "semantic-ui-react";

const FriendsList = (props) => {
  const { friends, onFriendClick } = props;
  return (
    <List link>
      {friends && friends.length > 0 ? (
        friends.map((friend) => (
          <List.Item
            key={friend.username}
            onClick={() => onFriendClick(friend.username)}
          >
            {friend.username}
          </List.Item>
        ))
      ) : (
        <List.Item>No friends</List.Item>
      )}
    </List>
  );
};

export default FriendsList;
