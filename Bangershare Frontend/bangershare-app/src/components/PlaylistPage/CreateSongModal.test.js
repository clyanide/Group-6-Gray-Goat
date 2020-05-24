import React from "react";
import SongModal from "./CreateSongModal.js";
import { createShallow } from "@material-ui/core/test-utils";
import { TextField, Button } from "@material-ui/core";

describe("<CreateSongModal />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it("should show correct number of buttons", () => {
    const wrapper = shallow(<SongModal />);
    expect(wrapper).toContainMatchingElements(4, Button);
  });

  it("should show correct button text on buttons", () => {
    const wrapper = shallow(<SongModal />);

    const text = wrapper.find(Button);

    expect(text.at(0).text()).toBe("Youtube");
    expect(text.at(1).text()).toBe("Spotify");
    expect(text.at(2).text()).toBe("Cancel");
    expect(text.at(3).text()).toBe("Create");
  });

  it("should show correct number of TextFields", () => {
    const wrapper = shallow(<SongModal />);
    expect(wrapper).toContainMatchingElements(3, TextField);
  });

  it("should show correct labels", () => {
    const wrapper = shallow(<SongModal />);
    const label1 = <h4>Song Name</h4>;
    const label2 = <h4>Artist Name</h4>;
    const label3 = <h4>Youtube URL</h4>;

    expect(wrapper).toContainReact(label1);
    expect(wrapper).toContainReact(label2);
    expect(wrapper).toContainReact(label3);
  });
});
