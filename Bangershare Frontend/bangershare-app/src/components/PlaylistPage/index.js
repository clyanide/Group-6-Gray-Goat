import React, { useState, useEffect } from "react";
import SongList from "./SongsList";
import CreateSongModal from "../../containers/PlaylistPage/CreateSongModal";
import { Typography, Divider, IconButton, Tooltip } from "@material-ui/core";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
      <Typography color="textSecondary" variant="subtitle1" style={{ marginLeft: "4vw", marginBottom: "2vh" }}>
        Created by {currentPlaylist.creator}
      </Typography>
      <div style={{ marginLeft: "3vw" }}>
        <Tooltip title="Play Playlist">
          <IconButton color="primary">
            <PlayCircleFilledWhiteIcon style={{ width: "45px", height: "45px" }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add Song">
          <IconButton color="primary" onClick={() => handleSetModal(true)}>
            <AddCircleIcon style={{ width: "45px", height: "45px" }} />
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
              <div>You have no songs.</div>
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
