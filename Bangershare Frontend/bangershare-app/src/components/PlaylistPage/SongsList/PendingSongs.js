import React from "react";
import CreateSongList from "../../../containers/PlaylistPage/SongsList/CreateSongList";
import { Typography } from "@material-ui/core";

const PendingSongs = (props) => {
  const { songs, deleteSong, updateSong, isOwner } = props;

  const handleUpdateSong = (song, key, value) => {
    const updatedSong = {
      ...song,
      [key]: value,
    };
    updateSong(updatedSong);
  };

  const handleDeleteSong = (song) => {
    deleteSong(song);
  };

  return (
    <>
      {songs && songs.length > 0 ? (
        <>
          <Typography
            variant="h6"
            style={{ paddingLeft: "25px", paddingTop: "3vh" }}
          >
            {" "}
            Pending Songs{" "}
          </Typography>
          <Typography
            color="textSecondary"
            variant="subtitle"
            style={{ paddingLeft: "25px", paddingTop: "3vh" }}
          >
            {" "}
            Suggested by others{" "}
          </Typography>
          <CreateSongList
            songs={songs}
            onUpdateSong={handleUpdateSong}
            onDeleteSong={handleDeleteSong}
            isOwner={isOwner}
          />
        </>
      ) : null}
    </>
  );
};

export default PendingSongs;
