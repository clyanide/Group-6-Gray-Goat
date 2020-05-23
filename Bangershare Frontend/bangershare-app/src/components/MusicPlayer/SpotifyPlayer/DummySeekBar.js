import React from "react";
import Slider from "@material-ui/core/Slider";

const DummySeekBar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80vw",
          paddingLeft: "20vw",
        }}
      >
        <Slider color="primary" value={0} max={0} />
      </div>
      <p
        style={{
          position: "relative",
          left: "20vw",
          display: "inline-block",
        }}
      >
        0:00
      </p>
      <p
        style={{
          position: "relative",
          left: "20.3vw",
          display: "inline-block",
        }}
      >
        / 0:00
      </p>
    </div>
  );
};

export default DummySeekBar;
