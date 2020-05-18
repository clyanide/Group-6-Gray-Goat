import React from 'react';
import Songs from "./Songs"
import PendingSongs from "./PendingSongs"

const SongList = (props) => {
    const { songs, isOwner } = props;

    return (
        <>
            <Songs songs={songs.filter(song => { return song.isPending === false })} />
            {isOwner ?
                <PendingSongs songs={songs.filter(song => { return song.isPending === true })} />
                :
                null
            }
        </>
    );
}



export default SongList;