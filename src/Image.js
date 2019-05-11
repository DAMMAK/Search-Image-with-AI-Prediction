import React from "react";
import "./Image.scss";
const image = ({ url }) => {
  return (
    <div className="image-box">
      <img src={url} />
    </div>
  );
};

export default image;
