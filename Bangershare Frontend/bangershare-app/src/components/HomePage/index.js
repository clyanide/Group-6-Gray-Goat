import React from "react";
import Explore from "./Explore";
import Greeting from "../../containers/HomePage/Greeting";
import MyPlaylists from "./MyPlaylists";
import RecentPlaylists from "./RecentPlaylists";
import { Button } from "semantic-ui-react";

const HomeScreen = (props) => {
  return (
    <div>
      <Greeting />
      <RecentPlaylists />
      <MyPlaylists />
      <Explore />
      <Button onClick={() => props.history.push("/friends")} />
    </div >
  );
};

export default HomeScreen;
