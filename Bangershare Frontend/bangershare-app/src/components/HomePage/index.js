import React, { useEffect, useState } from "react";
import Explore from "./Explore";
import Greeting from "../../containers/HomePage/Greeting";
import MyPlaylists from "./MyPlaylists";
import RecentPlaylists from "./RecentPlaylists";
import CreatePlaylistModal from "../../containers/HomePage/CreatePlaylistModal";
import { Button } from "semantic-ui-react";

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
    props.push("/playlist");
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
      <Button onClick={() => handleModal(true)}>Create Playlist</Button>
    </div>
  );
};

export default HomeScreen;
