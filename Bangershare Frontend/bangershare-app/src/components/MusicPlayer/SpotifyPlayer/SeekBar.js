import React from "react";
import Slider from "@material-ui/core/Slider";

const convertToTimestamp = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.trunc(time - minutes * 60);

  return { m: minutes, s: seconds };
};

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
  }, [props.paused, counter, props.duration]);

  return (
    <div>
      <Slider
        value={counter}
        onChange={(event, value) => set(value)}
        max={props.duration}
      />
      <p>
        {convertToTimestamp(counter).m} :{" "}
        {convertToTimestamp(counter).s < 10 ? "0" : null}
        {convertToTimestamp(counter).s}
      </p>
      <p>
        {convertToTimestamp(props.duration).m} :{" "}
        {convertToTimestamp(props.duration).s < 10 ? "0" : null}
        {convertToTimestamp(props.duration).s}
      </p>
    </div>
  );
};

export default SeekBar;
