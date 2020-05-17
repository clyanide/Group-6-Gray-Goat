import React from 'react';
import SongList from "./SongsList"

const PlaylistPage = (props) => {
    const { currentPlaylist } = props;

    return (
        <>
            {currentPlaylist && currentPlaylist.songs.length > 0 ?
                <SongList isOwner={currentPlaylist.isOwner} songs={currentPlaylist.songs} />
                :
                <div>
                    You have no songs.
                </div>
            }
        </>
    );
}

export default PlaylistPage;