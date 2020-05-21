import React, { useEffect } from "react";
import createPlaylist from "../HomePage/Playlist";
import { Grid, Typography } from "@material-ui/core";

const ProfilePage = (props) => {
  const {
    profilePlaylist,
    getProfilePlaylist,
    user,
    setCurrentPlaylist,
    search,
    isFetching,
    followPlaylist,
    unfollowPlaylist
  } = props;

  const queryString = require("query-string");
  const username = queryString.parse(search).username;

  useEffect(() => {
    if (user === "") {
      getProfilePlaylist(username);
    } else {
      getProfilePlaylist(user);
    }
  }, [getProfilePlaylist, queryString, search, user, username]);

  const handleOnPlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
  };

  const handleOnFollowClick = (playlistId) => {
    followPlaylist(playlistId, username)
  }

  const handleOnUnfollowClick = (playlistId) => {
    unfollowPlaylist(playlistId, username)
  }

  return (
    <>
      {!isFetching ? (
        <Grid direction="column" container spacing={5}>
          <Grid item xs={12} spacing={3}>
            <Typography variant="h5">
              <strong>{username}</strong>
            </Typography>
          </Grid>
          {profilePlaylist && profilePlaylist.length > 0 ? (
            <>
              <Grid item xs={12}>
                <Typography variant="h6">Playlists</Typography>
                {createPlaylist(
                  profilePlaylist.filter(
                    (playlist) => playlist.isOwner === true
                  ),
                  handleOnPlaylistClick,
                  handleOnFollowClick,
                  handleOnUnfollowClick
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Playlists they follow</Typography>
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
              <div>Sorry there seems to be no playlist</div>
            )}
        </Grid>
      ) : (
          <div>LOADING</div>
        )}
    </>
  );
};

export default ProfilePage;
