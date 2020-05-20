import React, { useEffect, useState } from "react";
import Explore from "./Explore";
import Greeting from "../../containers/HomePage/Greeting";
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

  return (
    <div>
      <Greeting />
      {!isFetching ? (
        <>
          <RecentPlaylists
            playlists={userPlaylist}
            handleOnPlaylistClick={handleOnPlaylistClick}
          />
          <MyPlaylists
            playlists={userPlaylist}
            handleOnPlaylistClick={handleOnPlaylistClick}
          />
          <Explore
            playlists={friendPlaylist}
            handleOnPlaylistClick={handleOnPlaylistClick}
          />
        </>
      ) : (
        <p>Loading</p>
      )}
      <CreatePlaylistModal open={modalOpen} handleModal={setModal} />
      <Fab onClick={() => handleModal(true)}>
        <PlaylistAddIcon />
      </Fab>
    </div>
  );
};

export default HomeScreen;
