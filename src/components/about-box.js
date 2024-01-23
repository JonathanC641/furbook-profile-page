import React, { Component } from "react";
import "./css/about-box.css";
const aboutBox = () => {
  return (
    <div className="About">
      <div className="Header">About</div>
      {/* <div className="Info"> */}
      <div>Age: 12</div>
      <div>Occupation: Pet</div>
      <div>Education: WildCat Academy</div>
      <div>
        Favorite Bands: Cat Stevens, Def Leopard, Atomic Kitten, Lionel Ritchie
      </div>
      <div>
        Contact Info: Meow at me at the fence behind Burger King on 242nd and
        Broadway
      </div>
      <div>Relationship Status: Single</div>
      <div>Places Lived: Paris, France and Bronx, New York</div>
    </div>
    // </div>
  );
};

export default aboutBox;
