import React from "react";
import Profile from "./index.js";
import { createShallow } from "@material-ui/core/test-utils";
import { Typography } from "@material-ui/core";

describe("<Profile />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should show correct number of typographys", () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toContainMatchingElements(3, Typography);
  });
});
