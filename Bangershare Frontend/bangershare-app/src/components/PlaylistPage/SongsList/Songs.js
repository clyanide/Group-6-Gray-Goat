import React from "react";
import CreateSongList from "../../../containers/PlaylistPage/SongsList/CreateSongList";

const Songs = (props) => {
  const { songs, isOwner, deleteSong } = props;

  const handleDeleteSong = (song) => {
    deleteSong(song);
  };

  return (
    <CreateSongList
      songs={songs}
      onDeleteSong={handleDeleteSong}
      isOwner={isOwner}
    />
  );
};

export default Songs;
