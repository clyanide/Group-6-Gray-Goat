import React, { useState } from "react";
import FriendsList from "./FriendsList";
import FriendRequests from "./FriendRequests";
import { Search, Button } from "semantic-ui-react";

const FriendsPage = () => {
  const [visibleList, setVisible] = useState(true);

  return (
    <div>
      <div>
        <div>
          <p>My Friends</p>
        </div>
        <Search open={false} />
        <Button onClick={() => setVisible(!visibleList)}>
          Friends List / Friend Requests
        </Button>
        <Button>Add Friend</Button>
      </div>
      {visibleList ? <FriendsList /> : <FriendRequests />}
    </div>
  );
};

export default FriendsPage;
