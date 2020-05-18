import React from 'react';
import CreateSongList from "./CreateSongList"

const Songs = (props) => {
    const { songs } = props;
    console.warn(songs)
    return (
        <>
            <CreateSongList songs={songs} />
        </>
    );
}

export default Songs;
