import React, { useEffect } from "react";
import createPlaylist from "../HomePage/Playlist";
import {
  Grid,
  Typography,
  Divider,
  IconButton,
  Avatar,
  Tooltip,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupIcon from "@material-ui/icons/Group";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

const ProfilePage = (props) => {
  const {
    profilePlaylist,
    getProfilePlaylist,
    user,
    setCurrentPlaylist,
    search,
    isFetching,
    followPlaylist,
    unfollowPlaylist,
    getFriends,
    sentRequests,
    pendingRequests,
    friends,
    addFriend,
    acceptRequest,
    deleteRequest,
  } = props;

  const queryString = require("query-string");
  const username = queryString.parse(search).username;

  useEffect(() => {
    if (user === "") {
      getProfilePlaylist(username);
    } else {
      getProfilePlaylist(user);
    }
    getFriends();
  }, [getProfilePlaylist, queryString, search, user, username, getFriends]);

  const handleOnPlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
  };

  const handleOnFollowClick = (playlistId) => {
    followPlaylist(playlistId, username);
  };

  const handleOnUnfollowClick = (playlistId) => {
    unfollowPlaylist(playlistId, username);
  };

  return (
    <>
      <Grid direction="column" container spacing={5}>
        <Grid container direction="row" item xs={12} spacing={3}>
          <Grid item>
            <div style={{ paddingLeft: "80px", paddingTop: "16px" }}>
              <Typography variant="subtitle1">Profile</Typography>
              <Typography variant="h3">
                <strong>{username}</strong>
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <div style={{ paddingTop: "35px", paddingLeft: "15px" }}>
              {username &&
              username !== localStorage.getItem("username") &&
              !isFetching ? (
                <>
                  {(() => {
                    if (
                      sentRequests.find(
                        (request) => request.receiverUsername === username
                      ) !== undefined &&
                      sentRequests.length > 0
                    ) {
                      return (
                        <Tooltip
                          title="Cancel Request"
                          onClick={() => deleteRequest(username)}
                        >
                          <IconButton color="primary">
                            <Avatar style={{ backgroundColor: "#ff3d00" }}>
                              <PersonAddDisabledIcon
                                style={{ fill: "white" }}
                              />
                            </Avatar>
                          </IconButton>
                        </Tooltip>
                      );
                    } else if (
                      friends.find((friend) => friend.username === username) !==
                      undefined
                    ) {
                      return (
                        <>
                          <IconButton color="primary" disabled>
                            <Avatar style={{ backgroundColor: "#7d12ff" }}>
                              <GroupIcon style={{ fill: "white" }} />
                            </Avatar>
                          </IconButton>
                          <Tooltip title="Delete Friend">
                            <IconButton
                              color="primary"
                              onClick={() => deleteRequest(username)}
                            >
                              <Avatar style={{ backgroundColor: "#ff3d00" }}>
                                <PersonAddDisabledIcon
                                  style={{ fill: "white" }}
                                />
                              </Avatar>
                            </IconButton>
                          </Tooltip>
                        </>
                      );
                    } else if (
                      pendingRequests.find(
                        (request) => request.senderUsername === username
                      ) !== undefined &&
                      pendingRequests.length > 0
                    ) {
                      return (
                        <>
                          <Tooltip title="Accept Request">
                            <IconButton
                              color="primary"
                              onClick={() => acceptRequest(username)}
                            >
                              <Avatar style={{ backgroundColor: "#7d12ff" }}>
                                <PersonAddIcon style={{ fill: "white" }} />
                              </Avatar>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete Request">
                            <IconButton
                              color="primary"
                              onClick={() => deleteRequest(username)}
                            >
                              <Avatar style={{ backgroundColor: "#ff3d00" }}>
                                <PersonAddDisabledIcon
                                  style={{ fill: "white" }}
                                />
                              </Avatar>
                            </IconButton>
                          </Tooltip>
                        </>
                      );
                    } else {
                      return (
                        <Tooltip title="Add Friend">
                          <IconButton
                            color="primary"
                            onClick={() => addFriend(username)}
                          >
                            <Avatar style={{ backgroundColor: "#7d12ff" }}>
                              <GroupAddIcon style={{ fill: "white" }} />
                            </Avatar>
                          </IconButton>
                        </Tooltip>
                      );
                    }
                  })()}
                </>
              ) : null}
            </div>
          </Grid>
        </Grid>
        <Divider />
        <>
          {!isFetching ? (
            <>
              {profilePlaylist && profilePlaylist.length > 0 ? (
                <>
                  <Grid item xs={12} style={{ paddingTop: "6vh" }}>
                    <Typography variant="h5" style={{ paddingLeft: "20px" }}>
                      {username}'s Playlists
                    </Typography>
                    {createPlaylist(
                      profilePlaylist.filter(
                        (playlist) => playlist.isOwner === true
                      ),
                      handleOnPlaylistClick,
                      handleOnFollowClick,
                      handleOnUnfollowClick
                    )}
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: "6vh" }}>
                    <Typography variant="h5" style={{ paddingLeft: "20px" }}>
                      Playlists {username} follows
                    </Typography>
                    {createPlaylist(
                      profilePlaylist.filter(
                        (playlist) => playlist.isOwner === false
                      ),
                      handleOnPlaylistClick,
                      handleOnFollowClick,
                      handleOnUnfollowClick
                    )}
                  </Grid>
                </>
              ) : (
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    style={{ paddingLeft: "5vw", paddingTop: "24px" }}
                  >
                    Sorry the user has no playlists
                  </Typography>
                </Grid>
              )}
            </>
          ) : (
            <p>loading</p>
          )}
        </>
      </Grid>
    </>
  );
};

export default ProfilePage;
