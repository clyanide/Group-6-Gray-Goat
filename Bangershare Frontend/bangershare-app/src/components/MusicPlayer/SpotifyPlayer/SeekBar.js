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

  // Increments seekbar position as song progresses
  React.useEffect(() => {
    let interval = null;
    if (!paused && counter < duration) {
      interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);

      // Reset seek bar if song has ended
      endOfSongCallback(counter);
    } else if (paused && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [paused, counter, duration, endOfSongCallback]);

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
        <Slider
          color="primary"
          value={counter}
          onChange={(event, value) => set(value)}
          max={duration}
        />
      </div>
      <p
        style={{
          position: "relative",
          left: "20vw",
          display: "inline-block",
        }}
      >
        {convertToTimestamp(counter).m} :{" "}
        {convertToTimestamp(counter).s < 10 ? "0" : null}
        {convertToTimestamp(counter).s}
      </p>
      <p
        style={{
          position: "relative",
          left: "20.3vw",
          display: "inline-block",
        }}
      >
        / {convertToTimestamp(duration).m} :{" "}
        {convertToTimestamp(duration).s < 10 ? "0" : null}
        {convertToTimestamp(duration).s}
      </p>
    </div>
  );
};

export default SeekBar;
