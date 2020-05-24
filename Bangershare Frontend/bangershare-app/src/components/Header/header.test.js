import React from "react";
import Header from "./index.js";
import { createShallow } from "@material-ui/core/test-utils";
import { Typography } from "@material-ui/core";

describe("<Header />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should show correct number of typography", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toContainMatchingElements(1, Typography);
  });

  it("should show correct typography", () => {
    const wrapper = shallow(<Header />);

    const text = wrapper.find(Typography);

    expect(text.text()).toBe("BangerShare");
  });
});
