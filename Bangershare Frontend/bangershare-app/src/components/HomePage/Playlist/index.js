import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "semantic-ui-react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const createPlaylist = (playlists, handleOnPlaylistClick) => (
  <>
    {playlists && playlists.length > 0 ? (
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {playlists.map((playlist) => (
          <Card raised={true} onClick={() => handleOnPlaylistClick(playlist)}>
            <Card.Content>
              <Card.Header>{playlist.name}</Card.Header>
              <Card.Description>Created by {playlist.creator}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Carousel>
    ) : (
      <div>You have no playlists</div>
    )}
  </>
);

export const createFriendPlaylist = (playlists, handleOnPlaylistClick) => (
  <>
    {playlists && playlists.length > 0 ? (
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {playlists.map((playlist) => {
          if (playlist.playlistSongs.length > 0) {
            return playlist.playlistSongs.map((p) => (
              <Card raised={true} onClick={() => handleOnPlaylistClick(p)}>
                <Card.Content>
                  <Card.Header>{p.name}</Card.Header>
                  <Card.Description>Created by {p.creator}</Card.Description>
                </Card.Content>
              </Card>
            ));
          }
          return null;
        })}
      </Carousel>
    ) : (
      <div>You have no friends</div>
    )}
  </>
);
export default createPlaylist;
