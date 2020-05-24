import React from "react";
import FriendList from "./FriendsList/index.js";
import { createShallow } from "@material-ui/core/test-utils";
import { Typography } from "@material-ui/core";

describe("<FriendList />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should show correct number of typography", () => {
    const wrapper = shallow(<FriendList />);

    expect(wrapper).toContainMatchingElements(1, Typography);
  });

  it("should show correct text", () => {
    const wrapper = shallow(<FriendList />);
    const text = wrapper.find(Typography);

    expect(text.text()).toBe("You seem to have no friends. Try adding some.");
  });
});
