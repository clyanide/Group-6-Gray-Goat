import React, { useEffect, useState } from "react";
import Explore from "./Explore";
import MyPlaylists from "./MyPlaylists";
import RecentPlaylists from "./RecentPlaylists";
import CreatePlaylistModal from "../../containers/HomePage/CreatePlaylistModal";
import { Tooltip, Button } from "@material-ui/core";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import "./Playlist/index.css";
import PlaylistLoader from "../general/PlaylistLoader"

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
          <PlaylistLoader skeletons={3} num={5} />
        )}
      <CreatePlaylistModal open={modalOpen} handleModal={setModal} />
    </div>
  );
};

export default HomeScreen;
