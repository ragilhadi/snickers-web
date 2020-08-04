import React from "react";
import "./RoundIcon.scss";

const RoundIcon = ({ children, size = "lg", className }) => {
  return <div className={`round-icon ${size} ${className}`}>{children}</div>;
};

export default RoundIcon;
