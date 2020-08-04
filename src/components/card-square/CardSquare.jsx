import React from "react";
import "./CardSquare.scss";
import RoundIcon from "../round-icon/RoundIcon";
import photo from "../../assets/sneaker-nobg.png";

const CardSquare = ({ bgcolor = "blue" }) => {
  return (
    <div className={`card-square ${bgcolor}`}>
      <img src={photo} alt="sneaker" />
      <h1>Sneakers Black</h1>
      <RoundIcon size="lg" className="price">
        $400
      </RoundIcon>
    </div>
  );
};

export default CardSquare;
