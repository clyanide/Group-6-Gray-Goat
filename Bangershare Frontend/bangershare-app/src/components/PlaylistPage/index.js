import React, { useState, useEffect } from "react";
import SongList from "./SongsList";
import CreateSongModal from "../../containers/PlaylistPage/CreateSongModal";
import {
  Typography,
  Divider,
  IconButton,
  Tooltip,
  Avatar,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import SongListLoader from "../general/SongListLoader";

const PlaylistPage = (props) => {
  const {
    currentPlaylist,
    isFetching,
    search,
    getPlaylist,
    setCurrentPlayingPlaylist,
    setCurrentSong,
  } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const [openModal, setModal] = useState(false);

  const queryString = require("query-string");

  const handleSetModal = (bool) => {
    setModal(bool);
  };

  const handleOnPlay = () => {
    if (currentPlaylist.songs.length !== 0) {
      setCurrentPlayingPlaylist(currentPlaylist);
      setCurrentSong(currentPlaylist.songs[0]);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    if (currentPlaylist.id === 0) {
      const playlistId = queryString.parse(search).id;
      getPlaylist(playlistId);
    }
  }, [getPlaylist, currentPlaylist.id, queryString, search]);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Empty Playlist"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This playlist is currently empty. Please add a song first.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Typography
        variant="h3"
        style={{ marginTop: "20px", marginLeft: "80px" }}
      >
        {currentPlaylist.name}
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        style={{ marginLeft: "80px", marginBottom: "20px" }}
      >
        Created by {currentPlaylist.creator}
      </Typography>
      <div style={{ marginLeft: "70px", marginBottom: "20px" }}>
        <Tooltip title="Play Playlist">
          <IconButton color="primary" onClick={() => handleOnPlay()}>
            <Avatar style={{ backgroundColor: "#7d12ff" }}>
              <PlayArrowIcon fontSize="large" style={{ fill: "white" }} />
            </Avatar>
          </IconButton>
        </Tooltip>
        {currentPlaylist.following ? (
          <Tooltip title="Add Song">
            <IconButton color="primary" onClick={() => handleSetModal(true)}>
              <Avatar style={{ backgroundColor: "#7d12ff" }}>
                <AddIcon style={{ fill: "white" }} fontSize="large" />
              </Avatar>
            </IconButton>
          </Tooltip>
        ) : (
          <Typography
            variant="h6"
            style={{ display: "inline", paddingLeft: "15px" }}
          >
            Follow the playlist to start adding songs.
          </Typography>
        )}
      </div>
      <Divider style={{ backgroundColor: "#7d12ff" }} />
      {!isFetching ? (
        <>
          {currentPlaylist &&
          currentPlaylist.songs &&
          currentPlaylist.songs.length > 0 ? (
            <SongList
              isOwner={currentPlaylist.isOwner}
              songs={currentPlaylist.songs}
            />
          ) : (
            <Typography
              style={{ marginTop: "35px", marginLeft: "80px" }}
              variant="h4"
            >
              Playlist has no songs.
            </Typography>
          )}
          <CreateSongModal open={openModal} handleModal={handleSetModal} />
        </>
      ) : (
        <SongListLoader int={10} />
      )}
    </>
  );
};

export default PlaylistPage;
