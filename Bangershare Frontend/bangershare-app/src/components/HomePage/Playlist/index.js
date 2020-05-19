import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardActionArea, CardContent, Typography, CardActions, IconButton, Grid } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const createPlaylist = (playlists, handleOnPlaylistClick) => (
  <Grid item xs={12} spacing={5}>
    {playlists && playlists.length > 0 ? (
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
      >
        {playlists.map((playlist) => (
          playlistCard(playlist, handleOnPlaylistClick)
        ))}
      </Carousel>
    ) : (
        <div>There seems to be no playlists</div>
      )}
  </Grid>
);

export const createFriendPlaylist = (playlists, handleOnPlaylistClick) => (
  <Grid item xs={12} spacing={5}>
    {playlists && playlists.length > 0 ? (
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {playlists.map((playlist) => {
          if (playlist.playlistSongs.length > 0) {
            return playlist.playlistSongs.map((p) => (
              playlistCard(p, handleOnPlaylistClick)
            ));
          }
          return null;
        })}
      </Carousel>
    ) : (
        <div>You have no friends</div>
      )}
  </Grid>
);

const playlistCard = (playlist, handleOnPlaylistClick) => (
  <Card>
    <CardActionArea onClick={() => handleOnPlaylistClick(playlist)}>
      <CardContent>
        <Typography variant="h5">
          {playlist.name}
        </Typography>
        <Typography variant="subtitle1">
          Created by {playlist.creator}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <IconButton>
        <FavoriteBorderIcon fontSize="small" />
      </IconButton>
      <IconButton>
        <PlayCircleOutlineIcon fontSize="small" />
      </IconButton>
    </CardActions>
  </Card>
)
export default createPlaylist;
