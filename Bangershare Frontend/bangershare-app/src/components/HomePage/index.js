import React, { useEffect, useState } from "react";
import Explore from "./Explore";
import MyPlaylists from "./MyPlaylists";
import RecentPlaylists from "./RecentPlaylists";
import CreatePlaylistModal from "../../containers/HomePage/CreatePlaylistModal";
import { Tooltip, Button } from "@material-ui/core";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Skeleton from "@material-ui/lab/Skeleton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Playlist/index.css";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Divider,
} from "@material-ui/core";

const HomeScreen = (props) => {
  const {
    getUserPlaylists,
    isFetching,
    userPlaylist,
    loadFriends,
    friendPlaylist,
    setCurrentPlaylist,
    followPlaylist,
    unfollowPlaylist,
  } = props;

  const [modalOpen, setModal] = useState(false);

  useEffect(() => {
    getUserPlaylists();
    loadFriends();
  }, [getUserPlaylists, loadFriends]);

  const handleModal = (bool) => {
    setModal(bool);
  };

  const handleOnPlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
  };

  const handleOnFollowClick = (playlistId) => {
    followPlaylist(playlistId);
  };

  const handleUnfollowClick = (playlistId) => {
    unfollowPlaylist(playlistId);
  };

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

  const skeletonRows = ["Recent Playlists", "My Playlists", "Explore"];
  const skeletonCols = [0, 1, 2, 3, 4];

  return (
    <div style={{ position: "relative", height: "90%" }}>
      {!isFetching ? (
        <>
          <RecentPlaylists
            playlists={userPlaylist}
            handleOnPlaylistClick={handleOnPlaylistClick}
            handleOnFollowClick={handleOnFollowClick}
            handleUnfollowClick={handleUnfollowClick}
          />
          <MyPlaylists
            playlists={userPlaylist}
            handleOnPlaylistClick={handleOnPlaylistClick}
            handleOnFollowClick={handleOnFollowClick}
            handleUnfollowClick={handleUnfollowClick}
          />
          <Tooltip title="Create Playlist">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleModal(true)}
              startIcon={<PlaylistAddIcon />}
              style={{
                position: "absolute",
                bottom: "2vh",
                right: "47vw",
              }}
            >
              New Playlist
            </Button>
          </Tooltip>
          <Explore
            playlists={friendPlaylist}
            handleOnPlaylistClick={handleOnPlaylistClick}
            handleOnFollowClick={handleOnFollowClick}
            handleUnfollowClick={handleUnfollowClick}
          />
        </>
      ) : (
        <div>
          {skeletonRows.map((row) => (
            <div>
              <div>
                <Typography
                  variant="h5"
                  style={{ marginLeft: "1vw", marginTop: "1vh" }}
                >
                  {row}
                </Typography>
              </div>
              <div>
                <Carousel
                  swipeable={true}
                  draggable={true}
                  responsive={responsive}
                  infinite={true}
                  keyBoardControl={true}
                  containerClass="carousel-container"
                  itemClass="image-item"
                  arrows={false}
                >
                  {skeletonCols.map((col) => (
                    <Card style={{ height: "15vh" }}>
                      <CardActionArea>
                        <Skeleton />
                        <CardContent>
                          <Skeleton />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      )}
      <CreatePlaylistModal open={modalOpen} handleModal={setModal} />
    </div>
  );
};

export default HomeScreen;
