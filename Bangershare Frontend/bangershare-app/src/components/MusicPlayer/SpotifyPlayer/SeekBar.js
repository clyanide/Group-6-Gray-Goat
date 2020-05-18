import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";

const SeekBar = (props) => {
  const set = (value) => {
    setCounter(value);
    props.parentCallback(value);
  };

  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let interval = null;
    if (!props.paused && counter < props.duration) {
      interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    } else if (props.paused && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props.paused, counter]);

  return (
    <Slider
      value={counter}
      onChange={(event, value) => set(value)}
      max={props.duration}
    />
  );
};

export default SeekBar;
