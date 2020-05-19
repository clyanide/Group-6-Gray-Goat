import React, { useEffect } from "react";
import createPlaylist from "../HomePage/Playlist";
import { Grid, Typography } from "@material-ui/core";

const ProfilePage = (props) => {
  const {
    profilePlaylist,
    getProfilePlaylist,
    user,
    setCurrentPlaylist,
  } = props;

  useEffect(() => {
    getProfilePlaylist();
  }, [getProfilePlaylist]);

  const handleOnPlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
    props.push("/playlist");
  };
  return (
    <Grid direction="column" container spacing={5}>
      <Grid item xs={12} spacing={3}>
        <Typography variant="h5">
          <strong>{user}</strong>
        </Typography>
      </Grid>
      {profilePlaylist && profilePlaylist.length > 0 ? (
        <>
          <Grid item xs={12}>
            <Typography variant="h6">Playlists</Typography>
            {createPlaylist(
              profilePlaylist.filter((playlist) => playlist.isOwner === true),
              handleOnPlaylistClick
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Playlists they follow</Typography>
            {createPlaylist(
              profilePlaylist.filter((playlist) => playlist.isOwner === false),
              handleOnPlaylistClick
            )}
          </Grid>
        </>
      ) : (
        <div>Sorry there seems to be no playlist</div>
      )}
    </Grid>
  );
};

export default ProfilePage;
