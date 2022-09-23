import React from "react";
import logo from "../images/journey-logo.png";

export default function Header() {
  return (
    <div className="header">
     <img className="header--logo" src={logo} alt="" />
      <h2 className="header--title">my travel journal.</h2>
    </div>
  );
}
