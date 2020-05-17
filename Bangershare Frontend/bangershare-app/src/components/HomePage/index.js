import React, { useEffect } from "react";
import Explore from "./Explore";
import Greeting from "../../containers/HomePage/Greeting";
import MyPlaylists from "./MyPlaylists";
import RecentPlaylists from "./RecentPlaylists";
import { Button } from "semantic-ui-react";

const HomeScreen = (props) => {
  const { getUserPlaylists, isFetching, userPlaylist } = props;

  useEffect(() => {
    getUserPlaylists();
  }, [getUserPlaylists]);

  return (
    <div>
      <Greeting />
      {!isFetching ?
        <>
          <RecentPlaylists playlists={userPlaylist} />
          <MyPlaylists playlists={userPlaylist} />
          <Explore />
        </>
        :
        <p>Loading</p>
      }
      <Button onClick={() => props.history.push("/friends")} />
    </div>
  );
};

export default HomeScreen;
