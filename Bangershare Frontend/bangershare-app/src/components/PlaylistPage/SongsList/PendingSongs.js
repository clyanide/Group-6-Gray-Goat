import React from 'react';
import { createSongList } from "./"

const PendingSongs = (props) => {
    const { songs } = props
    return (
        <>
            {
                createSongList(songs)
            }
        </>
    )

}

export default PendingSongs;