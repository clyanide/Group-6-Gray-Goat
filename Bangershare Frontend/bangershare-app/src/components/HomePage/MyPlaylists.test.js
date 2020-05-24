import React from "react";
import Playlist from "./MyPlaylists.js";
import { createShallow } from "@material-ui/core/test-utils";
import { Typography } from "@material-ui/core";

describe("<MyPlaylists />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should show correct number of typography", () => {
    const wrapper = shallow(<Playlist />);
    expect(wrapper).toContainMatchingElements(2, Typography);
  });

  it("should display correct typography", () => {
    const wrapper = shallow(<Playlist />);
    const text = wrapper.find(Typography);

    expect(text.at(0).text()).toBe("My Playlists");
  });
});
