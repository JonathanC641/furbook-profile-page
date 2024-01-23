import React, { Component } from "react";
import pic from "./images/takota.png";
import "./css/picture-box.css";

const PictureBox = () => {
  return (
    <div className="PictureBox">
      <div>
        <img src={pic} class="pic" />
      </div>
    </div>
  );
};

export default PictureBox;
