import React from "react";

const Main = (props) => {
  const { nasData } = props;
  return (
    <div className="imgContainer">
      <img
        src={nasData?.hdurl}
        alt={nasData?.title || "dataImg"}
        className="bgImage"
      />
    </div>
  );
};

export default Main;
