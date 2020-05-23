import React, { useEffect, useState } from "react";
import Explore from "./Explore";
import MyPlaylists from "./MyPlaylists";
import RecentPlaylists from "./RecentPlaylists";
import CreatePlaylistModal from "../../containers/HomePage/CreatePlaylistModal";
import { Fab, Tooltip } from "@material-ui/core";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

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
          <Explore
            playlists={friendPlaylist}
            handleOnPlaylistClick={handleOnPlaylistClick}
            handleOnFollowClick={handleOnFollowClick}
            handleUnfollowClick={handleUnfollowClick}
          />
          <Tooltip title="Create Playlist">
            <Fab
              color="primary"
              onClick={() => handleModal(true)}
              style={{
                position: "absolute",
                bottomMargin: "5%",
                bottom: "5%",
                right: "10vw",
              }}
            >
              <PlaylistAddIcon />
            </Fab>
          </Tooltip>
        </>
      ) : (
        <p>Loading</p>
      )}
      <CreatePlaylistModal open={modalOpen} handleModal={setModal} />
    </div>
  );
};

export default HomeScreen;
