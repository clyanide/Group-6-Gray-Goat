import React from 'react';
import { createSongList } from "./"

const Songs = (props) => {
    const { songs } = props;
    return (
        <>
            {
                createSongList(songs)
            }
        </>
    );
}

export default Songs;
