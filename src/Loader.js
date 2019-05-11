import React from "react";
import "./Loader.scss";
const loader = () => {
  return (
    <div className="gooey">
      <span className="dot" />
      <div className="dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default loader;
