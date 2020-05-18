import React from "react";
import Songs from "../../../containers/PlaylistPage/SongsList/Songs";
import PendingSongs from "../../../containers/PlaylistPage/SongsList/PendingSongs";

const SongList = (props) => {
  const { songs, isOwner } = props;

  return (
    <>
      <Songs
        isOwner={isOwner}
        songs={songs.filter((song) => {
          return song.isPending === false;
        })}
      />
      {isOwner ? (
        <PendingSongs
          songs={songs.filter((song) => {
            return song.isPending === true;
          })}
        />
      ) : null}
    </>
  );
};

export default SongList;
