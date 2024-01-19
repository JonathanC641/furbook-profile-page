import React, { Component } from "react";
import pic from "./images/takota.png";
import "./css/picture-box.css";

const PictureBox = () => {
  return (
    <div className="PictureBox">
      <div>
        <img src={pic} class="pic" />
      </div>
      <div className="Info">
        <h3>Takota McConner</h3>
        <div className="Quote">
          <p>
            "Laziness is nothing more than the habit of resting before you get
            tired." - Jules Renard
          </p>
        </div>
      </div>
    </div>
  );
};

export default PictureBox;
