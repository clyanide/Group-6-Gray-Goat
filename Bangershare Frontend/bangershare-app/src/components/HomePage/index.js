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
  } = props;

  const [modalOpen, setModal] = useState(false);

  const handleModal = (bool) => {
    setModal(bool);
  };

  useEffect(() => {
    getUserPlaylists();
    loadFriends();
  }, [getUserPlaylists, loadFriends]);

  return (
    <div>
      <Greeting />
      {!isFetching ? (
        <>
          <RecentPlaylists playlists={userPlaylist} />
          <MyPlaylists playlists={userPlaylist} />
          <Explore playlists={friendPlaylist} />
        </>
      ) : (
        <p>Loading</p>
      )}
      <CreatePlaylistModal open={modalOpen} handleModal={setModal} />
      <Button onClick={() => handleModal(true)}>Create Playlist</Button>
      <Button onClick={() => props.history.push("/friends")} />
    </div>
  );
};

export default HomeScreen;
