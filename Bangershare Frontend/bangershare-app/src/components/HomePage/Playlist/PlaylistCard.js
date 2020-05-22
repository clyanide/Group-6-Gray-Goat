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
  } = props;

  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <CardActionArea onClick={() => handleOnPlaylistClick(playlist)}>
        <CardContent>
          <Typography variant="h5">{playlist.name}</Typography>
          <Typography color="textSecondary" variant="subtitle1">
            Created by <strong color="textPrimary">{playlist.creator}</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider style={{ backgroundColor: "#5e35b1" }} />
      <CardActions>
        {playlist.following ? (
          <IconButton onClick={() => unfollowPlaylist(playlist.id)}>
            <FavoriteIcon fontSize="default" color="secondary" />
          </IconButton>
        ) : (
            <IconButton onClick={() => followPlaylist(playlist.id)}>
              <FavoriteBorderIcon fontSize="defualt" color="secondary" />
            </IconButton>
          )}
        <IconButton  >
          <PlayCircleOutlineIcon color="white" fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PlaylistCard;
