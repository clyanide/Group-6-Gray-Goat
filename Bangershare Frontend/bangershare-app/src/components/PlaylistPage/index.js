import React, { useState, useEffect } from "react";
import SongList from "./SongsList";
import CreateSongModal from "../../containers/PlaylistPage/CreateSongModal";
import { Typography, Divider, IconButton, Tooltip, Avatar } from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

const PlaylistPage = (props) => {
  const { currentPlaylist, isFetching, search, getPlaylist } = props;
  const [openModal, setModal] = useState(false);

  const queryString = require("query-string");

  const handleSetModal = (bool) => {
    setModal(bool);
  };

  useEffect(() => {
    if (currentPlaylist.id === 0) {
      const playlistId = queryString.parse(search).id;
      getPlaylist(playlistId);
    }
  }, [getPlaylist, currentPlaylist.id, queryString, search]);

  return (
    <>
      <Typography variant="h3" style={{ marginTop: "2vh", marginLeft: "4vw" }}>
        {currentPlaylist.name}
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        style={{ marginLeft: "4vw", marginBottom: "2vh" }}
      >
        Created by {currentPlaylist.creator}
      </Typography>
      <div style={{ marginLeft: "3vw" }}>
        <Tooltip title="Play Playlist">
          <IconButton color="primary">
            <Avatar style={{ backgroundColor: "#7d12ff" }}>
              <PlayArrowIcon fontSize="large" style={{ fill: "white" }}
              />
            </Avatar>
          </IconButton>
        </Tooltip>
        <Tooltip title="Add Song">
          <IconButton color="primary" onClick={() => handleSetModal(true)}>
            <Avatar style={{ backgroundColor: "#7d12ff" }}>
              <AddIcon style={{ fill: "white" }} fontSize="large" />
            </Avatar>
          </IconButton>
        </Tooltip>
      </div>
      <Divider style={{ backgroundColor: "#7d12ff" }} />
      {!isFetching ? (
        <>
          {currentPlaylist &&
            currentPlaylist.songs &&
            currentPlaylist.songs.length > 0 ? (
              <SongList
                isOwner={currentPlaylist.isOwner}
                songs={currentPlaylist.songs}
              />
            ) : (
              <Typography
                style={{ marginTop: "2vh", marginLeft: "4vw" }}
                variant="h4"
              >
                Playlist has no songs.
              </Typography>
            )}
          <CreateSongModal open={openModal} handleModal={handleSetModal} />
        </>
      ) : (
          <p> Loading </p>
        )}
    </>
  );
};

export default PlaylistPage;
