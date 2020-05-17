import React from 'react';

const PlaylistPage = (props) => {
    const { currentPlaylist } = props;
    console.log(currentPlaylist)
    return (
        <>
            {currentPlaylist && currentPlaylist.id > 0 ?
                <div>whta</div>
                : <div> lol </div>
            }
        </>
    );
}

export default PlaylistPage;