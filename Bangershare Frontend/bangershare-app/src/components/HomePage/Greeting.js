import React from "react";

const Greeting = (props) => {
  const { name } = props;
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  );
};

export default Greeting;
