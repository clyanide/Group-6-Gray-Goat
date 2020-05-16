import React from "react";

const Loading = (props) => {
  const { isLoading } = props;
  console.log(isLoading);
  return <>{isLoading ? <p>Loading</p> : null}</>;
};

export default Loading;
