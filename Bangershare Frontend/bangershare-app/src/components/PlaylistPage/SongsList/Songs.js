import React from 'react';
import CreateSongList from "./CreateSongList"

const Songs = (props) => {
    const { songs, isOwner, deleteSong } = props;

    const handleDeleteSong = (song) => {
        deleteSong(song);
    }

    return (
        <CreateSongList songs={songs} onDeleteSong={handleDeleteSong} isOwner={isOwner} />
    );
}

export default Songs;
