import React from "react";
import "./Navbar.scss";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import RoundIcon from "../round-icon/RoundIcon";

const Navbar = () => {
  return (
    <div className="navbar">
      <RoundIcon size="sm">S</RoundIcon>
      <MdFavorite className="icon" />
      <MdShoppingCart className="icon" />
    </div>
  );
};

export default Navbar;
