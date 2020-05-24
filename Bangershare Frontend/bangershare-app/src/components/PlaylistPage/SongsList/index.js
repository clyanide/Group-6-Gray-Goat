import React from "react";
import Songs from "../../../containers/PlaylistPage/SongsList/Songs";
import PendingSongs from "../../../containers/PlaylistPage/SongsList/PendingSongs";

const SongList = (props) => {
  const { songs, isOwner } = props;

  return (
    <div
      style={{
        overflowY: "scroll",
        height: "72vh",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Songs
        isOwner={isOwner}
        songs={songs.filter((song) => song.isPending === false)}
      />
      {isOwner ? (
        <PendingSongs songs={songs.filter((song) => song.isPending === true)} />
      ) : null}
    </div>
  );
};

export default SongList;
