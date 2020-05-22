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

const PlaylistCard = (props) => {
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
      alert("This playlist is empty.");
    }
  };

  return (
    <Card style={{ width: "100%", height: "100%" }}>
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
          <IconButton color="secondary" onClick={() => unfollowPlaylist(playlist.id)}>
            <FavoriteIcon fontSize="default" />
          </IconButton>
        ) : (
          </IconButton>
        )}
        <IconButton onClick={() => handlePlayClick(playlist)}>
            <FavoriteBorderIcon fontSize="defualt" color="secondary" />
          <IconButton onClick={() => followPlaylist(playlist.id)}>
          <PlayCircleOutlineIcon color="white" fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PlaylistCard;
