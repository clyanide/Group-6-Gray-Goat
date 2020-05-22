import React, { useEffect, useState } from "react";
import Explore from "./Explore";
import Greeting from "./Greeting";
import MyPlaylists from "./MyPlaylists";
import RecentPlaylists from "./RecentPlaylists";
import CreatePlaylistModal from "../../containers/HomePage/CreatePlaylistModal";
import { Fab } from "@material-ui/core";
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
    <div style={{ position: "relative" }}>
      <Greeting />
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
        </>
      ) : (
          <p>Loading</p>
        )}
      <CreatePlaylistModal open={modalOpen} handleModal={setModal} />
      <Fab color="primary" onClick={() => handleModal(true)} style={{ position: "absolute", bottom: "0", right: "5vw" }}>
        <PlaylistAddIcon />
      </Fab>
    </div>
  );
};

export default HomeScreen;
