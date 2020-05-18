import React from "react";

const Loading = (props) => {
  const { isLoading } = props;

  return <>{isLoading ? <p>Loading</p> : null}</>;
};

export default Loading;
