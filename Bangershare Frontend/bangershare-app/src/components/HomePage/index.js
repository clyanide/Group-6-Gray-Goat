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
    if (userPlaylist === undefined || (userPlaylist && userPlaylist.length === 0)) {
      getUserPlaylists();
    }
    if (friendPlaylist === undefined || (friendPlaylist && friendPlaylist.length === 0)) {
      loadFriends();
    }
  }, [getUserPlaylists, loadFriends, userPlaylist, friendPlaylist]);

  const handleModal = (bool) => {
    setModal(bool);
  };

  const handleOnPlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
    props.history.push("/playlist")
  }

  return (
    <div>
      <Greeting />
      {!isFetching ? (
        <>
          <RecentPlaylists playlists={userPlaylist} handleOnPlaylistClick={handleOnPlaylistClick} />
          <MyPlaylists playlists={userPlaylist} handleOnPlaylistClick={handleOnPlaylistClick} />
          <Explore playlists={friendPlaylist} handleOnPlaylistClick={handleOnPlaylistClick} />
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
