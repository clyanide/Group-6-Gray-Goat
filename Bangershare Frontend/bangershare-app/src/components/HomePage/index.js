import React from "react";
import Explore from "./Explore";
import Greeting from "./Greeting";
import MyPlaylists from "./MyPlaylists";
import RecentPlaylists from "./RecentPlaylists";

const HomeScreen = () => {
  return (
    <div>
      <Greeting />
      <RecentPlaylists />
      <MyPlaylists />
      <Explore />
    </div>
  );
};

export default HomeScreen;
