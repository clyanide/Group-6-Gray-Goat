import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Grid,

} from "@material-ui/core";

import PlaylistCard from "./PlaylistCard"

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

const createPlaylist = (playlists, handleOnPlaylistClick, handleFollowClick, handleUnfollowClick) => (
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
        {playlists.map((playlist) =>
          <PlaylistCard playlist={playlist} handleOnPlaylistClick={handleOnPlaylistClick} followPlaylist={handleFollowClick} unfollowPlaylist={handleUnfollowClick} />
        )}
      </Carousel>
    ) : (
        <div>There seems to be no playlists</div>
      )}
  </Grid>
);

export const createFriendPlaylist = (playlists, handleOnPlaylistClick, handleFollowClick, handleUnfollowClick) => (
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
            return playlist.playlistSongs.map((p) =>
              <PlaylistCard playlist={p} handleOnPlaylistClick={handleOnPlaylistClick} followPlaylist={handleFollowClick} unfollowPlaylist={handleUnfollowClick} />
            );
          }
          return null;
        })}
      </Carousel>
    ) : (
        <div>You have no friends</div>
      )}
  </Grid>
);


export default createPlaylist;
