import React from 'react';
import CreateSongList from "./CreateSongList"

const PendingSongs = (props) => {
    const { songs, deleteSong, updateSong } = props

    const handleUpdateSong = (song, key, value) => {
        const updatedSong = {
            ...song,
            [key]: value
        }
        updateSong(updatedSong);
    }

    const handleDeleteSong = (song) => {
        console.log(song)
        // deleteSong(song)
    }

    return (
        <>
            <CreateSongList songs={songs} onUpdateSong={handleUpdateSong} onDeleteSong={handleDeleteSong} />
        </>
    )

}

export default PendingSongs;