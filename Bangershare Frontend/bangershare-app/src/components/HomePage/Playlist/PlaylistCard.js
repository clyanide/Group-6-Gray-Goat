import React from "react";
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

const PlaylistCard = (props) => {
  const {
    playlist,
    handleOnPlaylistClick,
    followPlaylist,
    unfollowPlaylist,
    setCurrentPlayingPlaylist,
    setCurrentSong,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePlayClick = (playlist) => {
    if (playlist.songs.length !== 0) {
      setCurrentPlayingPlaylist(playlist);
      setCurrentSong(playlist.songs[0]);
    } else {
      alert("This playlist is empty.");
    }
  };

  return (
    // <Card style={{ width: "100%", height: "100%", borderColor: "#5e35b1", borderStyle: "solid", borderWidth: "1px" }}>
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
  );
};

export default PlaylistCard;
