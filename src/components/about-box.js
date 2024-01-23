import React, { Component } from "react";
import "./css/about-box.css";
const aboutBox = () => {
  return (
    <div className="About">
      <div className="BackColor">
        <div className="Header">About</div>
        <div className="Info">Age: 12</div>
        <div className="Info">Occupation: Pet</div>
        <div className="Info">Education: WildCat Academy</div>
        <div className="Info">
          Favorite Bands: Cat Stevens, Def Leopard, Atomic Kitten, Lionel
          Ritchie
        </div>
        <div className="Info">
          Contact Info: Meow at me at the fence behind Burger King on 242nd and
          Broadway
        </div>
        <div className="Info">Relationship Status: Single</div>
        <div className="Info">
          Places Lived: Paris, France and Bronx, New York
        </div>
      </div>
    </div>
  );
};

export default aboutBox;
