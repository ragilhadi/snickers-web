import React from "react";
import "./Homepage.scss";
import CardSquare from "../../components/card-square/CardSquare";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="flex-1"></div>
      <div className="flex-2">
        <CardSquare />
        <CardSquare />
        <CardSquare />
        <CardSquare />
        <CardSquare />
        <CardSquare />
      </div>
    </div>
  );
};

export default Homepage;
