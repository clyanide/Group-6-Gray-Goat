import React from "react";
import Slider from "@material-ui/core/Slider";

const convertToTimestamp = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.trunc(time - minutes * 60);

  return { m: minutes, s: seconds };
};

const SeekBar = (props) => {
  const { parentCallback, paused, duration, endOfSongCallback } = props;

  const set = (value) => {
    setCounter(value);
    parentCallback(value);
  };

  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let interval = null;
    if (!paused && counter < duration) {
      interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);

      endOfSongCallback(counter);
    } else if (paused && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [paused, counter, duration, endOfSongCallback]);

  return (
    <div>
      <Slider
        color="primary"
        value={counter}
        onChange={(event, value) => set(value)}
        max={duration}
      />
      <p style={{ position: "relative", left: "20px" }}>
        {convertToTimestamp(counter).m} :{" "}
        {convertToTimestamp(counter).s < 10 ? "0" : null}
        {convertToTimestamp(counter).s}
      </p>
      <p style={{ position: "relative", left: "60px", bottom: "33px" }}>
        / {convertToTimestamp(duration).m} :{" "}
        {convertToTimestamp(duration).s < 10 ? "0" : null}
        {convertToTimestamp(duration).s}
      </p>
    </div>
  );
};

export default SeekBar;
