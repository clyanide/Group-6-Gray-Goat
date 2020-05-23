import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Divider,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const PlaylistCard = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const {
    playlist,
    handleOnPlaylistClick,
    followPlaylist,
    unfollowPlaylist,
    setCurrentPlayingPlaylist,
    setCurrentSong,
  } = props;

  const handlePlayClick = (playlist) => {
    if (playlist.songs.length !== 0) {
      setCurrentPlayingPlaylist(playlist);
      setCurrentSong(playlist.songs[0]);
    } else {
      setOpen(true);
    }
  };

  return (
    // <Card style={{ width: "100%", height: "100%", borderColor: "#5e35b1", borderStyle: "solid", borderWidth: "1px" }}>
    <div>
      <div>
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
      </div>
      <Card>
        <CardActionArea onClick={() => handleOnPlaylistClick(playlist)}>
          <CardContent>
            <Typography variant="h5">{playlist.name}</Typography>
            <Typography color="textSecondary" variant="subtitle1">
              Created by <strong>{playlist.creator}</strong>
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider style={{ backgroundColor: "#5e35b1" }} />
        <CardActions>
          {playlist.following ? (
            <IconButton
              color="secondary"
              onClick={() => unfollowPlaylist(playlist.id)}
            >
              <FavoriteIcon fontSize="default" />
            </IconButton>
          ) : (
            <IconButton
              color="secondary"
              onClick={() => followPlaylist(playlist.id)}
            >
              <FavoriteBorderIcon fontSize="defualt" />
            </IconButton>
          )}
          <IconButton onClick={() => handlePlayClick(playlist)}>
            <PlayCircleOutlineIcon color="white" fontSize="inherit" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default PlaylistCard;
