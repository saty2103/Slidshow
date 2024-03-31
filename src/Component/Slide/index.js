import React from "react";
import "./style.css";

function Slide({ image_url, caption, isActive }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`}>
      <img src={image_url} alt={caption} />
      <span>{caption}</span>
    </div>
  );
}

export default Slide;
