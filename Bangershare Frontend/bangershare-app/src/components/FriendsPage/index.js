import React, { useState, useEffect } from "react";
import FriendsList from "../../containers/FriendsPage/FriendsList";
import FriendRequests from "../../containers/FriendsPage/FriendRequests";
import SearchList from "../../containers/FriendsPage/SearchList"
import { Typography, Grid, Button } from "@material-ui/core";
import "./index.css"

const FriendsPage = (props) => {
  const [visibleList, setVisible] = useState(true);
  const { isFetching, setProfileUser, getFriends, getUsers } = props;

  const handleProfileClick = (username) => {
    setProfileUser(username);
  };

  useEffect(() => {
    getFriends();
    getUsers()
  }, [getFriends, getUsers]);

  return (
    <div style={{ height: "72vh", paddingTop: "8px" }}>
      <div>
        <Grid container direction="row" spacing={3} >
          <Grid container item xs={6} md={4} lg={3} direction="column" style={{ paddingLeft: "2vw", }}>
            <Typography variant="h5" style={{ paddingBottom: "5px" }}>
              Friends
            </Typography>
            <Button disabled={isFetching} onClick={() => setVisible(!visibleList)} variant="contained" color="primary">
              Friends List / Friend Requests
            </Button>
          </Grid>
          <Grid item xs={6} md={8} lg={9}>
            <SearchList onClickUser={handleProfileClick} />
          </Grid>
        </Grid>

      </div>
      <div style={{ paddingTop: "2vh" }}>
        {visibleList ? (
          <FriendsList onFriendClick={handleProfileClick} />
        ) : (
            <FriendRequests onFriendClick={handleProfileClick} />
          )}
      </div>
    </div>
  );
};

export default FriendsPage;
