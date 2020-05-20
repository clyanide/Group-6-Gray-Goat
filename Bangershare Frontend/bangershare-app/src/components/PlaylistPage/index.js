import React, { useState, useEffect } from "react";
import SongList from "./SongsList";
import CreateSongModal from "../../containers/PlaylistPage/CreateSongModal";
import { Button, Header } from "semantic-ui-react";

const PlaylistPage = (props) => {
  const { currentPlaylist, isFetching, search, getPlaylist } = props;
  const [openModal, setModal] = useState(false);

  const queryString = require('query-string');

  const handleSetModal = (bool) => {
    setModal(bool);
  };

  useEffect(() => {
    if (currentPlaylist.id === 0) {
      const playlistId = queryString.parse(search).id
      getPlaylist(playlistId)
    }
  }, [getPlaylist, currentPlaylist.id, queryString, search])

  return (
    <>
      <Header dividing>
        {currentPlaylist.name}
        <Header.Subheader>{currentPlaylist.creator}</Header.Subheader>
      </Header>
      {!isFetching ? (
        <>
          {currentPlaylist &&
            currentPlaylist.songs &&
            currentPlaylist.songs.length > 0 ? (
              <SongList
                isOwner={currentPlaylist.isOwner}
                songs={currentPlaylist.songs}
              />
            ) : (
              <div>You have no songs.</div>
            )}

          <CreateSongModal open={openModal} handleModal={handleSetModal} />
          <Button onClick={() => handleSetModal(true)}>Add song</Button>
        </>
      ) : (
          <p> Loading </p>
        )}
    </>
  );
};

export default PlaylistPage;
