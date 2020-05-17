import React, { useState, useEffect } from "react";
import FriendsList from "../../containers/FriendsPage/FriendsList";
import FriendRequests from "../../containers/FriendsPage/FriendRequests";
import { Search, Button } from "semantic-ui-react";

const FriendsPage = (props) => {
  const [visibleList, setVisible] = useState(true);
  const { isFetching, loadFriends } = props;
  useEffect(() => {
    loadFriends();
  }, [loadFriends]);

  return (
    <div>
      <div>
        <div>
          <p>My Friends</p>
        </div>
        <Search open={false} />
        <Button loading={isFetching} onClick={() => setVisible(!visibleList)}>
          Friends List / Friend Requests
        </Button>
        <Button>Add Friend</Button>
      </div>
      <>{visibleList ? <FriendsList /> : <FriendRequests />}</>
    </div>
  );
};

export default FriendsPage;
