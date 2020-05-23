import React, { useState, useEffect } from "react";
import FriendsList from "../../containers/FriendsPage/FriendsList";
import FriendRequests from "../../containers/FriendsPage/FriendRequests";
import SearchList from "../../containers/FriendsPage/SearchList";
import { Typography, Grid, Button, ButtonGroup, row } from "@material-ui/core";
import "./index.css";

const FriendsPage = (props) => {
  const [visibleList, setVisible] = useState(true);
  const [isFriendRequest, setFriendRequest] = useState(false);
  const { setProfileUser, getFriends, getUsers } = props;

  const handleProfileClick = (username) => {
    setProfileUser(username);
  };

  const handleToggle = (boolean) => {
    setFriendRequest(boolean);
    setVisible(!visibleList);
    var x = document.getElementById("btn");

    if (boolean) {
      x.style.marginLeft = "100px";
    } else {
      x.style.marginLeft = "0px";
    }
  };

  useEffect(() => {
    getFriends();
    getUsers();
  }, [getFriends, getUsers]);

  return (
    <div style={{ height: "72vh", paddingTop: "8px" }}>
      <div>
        <Grid container direction="row" spacing={3}>
          <Grid
            container
            item
            xs={6}
            md={4}
            lg={3}
            direction="column"
            style={{ paddingLeft: "30px" }}
          >
            <Typography variant="h5" style={{ paddingBottom: "5px" }}>
              Friends
            </Typography>
            <row>
              <ButtonGroup
                color="primary"
                variant="contained"
                style={{
                  borderRadius: "30px",
                  width: "200px",
                }}
              >
                <div
                  style={{
                    width: "200px",
                    minWidth: "200px",
                    textAlign: "center",
                    background: "#a8a6a5",
                    borderRadius: "30px",
                    height: "40px",
                  }}
                >
                  <div
                    id="btn"
                    style={{
                      position: "absolute",
                      width: "100px",
                      minWidth: "100px",
                      height: "40px",
                      background: "linear-gradient(to right, #7d12ff, #5E35B1)",
                      borderRadius: "30px",
                      transition: ".5s",
                    }}
                  ></div>
                  <Button
                    disabled={!isFriendRequest}
                    onClick={() => handleToggle(false)}
                    style={{
                      width: "50%",
                      padding: "10px 30px",
                      borderRadius: "30px",
                      color: "#FFFFFF",
                      height: "40px",
                      overflow: "hidden",
                    }}
                  >
                    List
                  </Button>
                  <Button
                    disabled={isFriendRequest}
                    onClick={() => handleToggle(true)}
                    style={{
                      width: "50%",
                      padding: "10px 30px",
                      borderRadius: "30px",
                      color: "#FFFFFF",
                      height: "40px",
                      overflow: "hidden",
                    }}
                  >
                    Requests
                  </Button>
                </div>
              </ButtonGroup>
            </row>
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
