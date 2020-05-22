import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@material-ui/core";
import "./index.css";

import PlaylistCard from "./PlaylistCard";

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

const createPlaylist = (
  playlists,
  handleOnPlaylistClick,
  handleFollowClick,
  handleUnfollowClick
) => (
  <>
    {playlists && playlists.length > 0 ? (
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="image-item"
      >
        {playlists.map((playlist) => (
          <PlaylistCard
            playlist={playlist}
            handleOnPlaylistClick={handleOnPlaylistClick}
            followPlaylist={handleFollowClick}
            unfollowPlaylist={handleUnfollowClick}
          />
        ))}
      </Carousel>
    ) : (
      <Typography
        variant="h5"
        style={{ marginLeft: "1vw", marginTop: "1vh", marginBottom: "5vh" }}
      >
        There seems to be no playlists
      </Typography>
    )}
  </>
);

export const createFriendPlaylist = (
  playlists,
  handleOnPlaylistClick,
  handleFollowClick,
  handleUnfollowClick
) => (
  <>
    {playlists && playlists.length > 0 ? (
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="image-item"
      >
        {playlists.map((playlist) => {
          if (playlist.playlistSongs.length > 0) {
            return playlist.playlistSongs.map((p) => (
              <PlaylistCard
                playlist={p}
                handleOnPlaylistClick={handleOnPlaylistClick}
                followPlaylist={handleFollowClick}
                unfollowPlaylist={handleUnfollowClick}
              />
            ));
          }
          return null;
        })}
      </Carousel>
    ) : (
      <Typography
        variant="h5"
        style={{ marginLeft: "1vw", marginBottom: "5vh" }}
      >
        You have no friends
      </Typography>
    )}
  </>
);

export default createPlaylist;
