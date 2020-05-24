import React, { useEffect, useState } from "react";
import Explore from "./Explore";
import MyPlaylists from "./MyPlaylists";
import RecentPlaylists from "./RecentPlaylists";
import CreatePlaylistModal from "../../containers/HomePage/CreatePlaylistModal";
import { Tooltip, Fab } from "@material-ui/core";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import "./Playlist/index.css";
import PlaylistLoader from "../general/PlaylistLoader"
import { random } from "../../utility/Randomiser"

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
        <div style={{ marginTop: "3vh" }}>
          <RecentPlaylists
            playlists={random(userPlaylist)}
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
        </div>
      ) : (
          <PlaylistLoader skeletons={3} num={5} />
        )}
      <CreatePlaylistModal open={modalOpen} handleModal={setModal} />
      <Tooltip title="Create Playlist">
        <Fab
          color="primary"
          style={{ position: "absolute", right: "10vw", bottom: "5vh" }}
          onClick={() => handleModal(true)}
        >
          <PlaylistAddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default HomeScreen;
