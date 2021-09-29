import React from "react";

const Cards = ({ id, image, name }) => {
  return (
    <div className="cards">
      <img src={image} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default Cards;
