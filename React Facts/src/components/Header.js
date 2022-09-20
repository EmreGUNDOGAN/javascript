import React from "react";
import logo from "../icons/react-logo.png";

export default function Header() {
  return (
    <div>
      <header>
        <div className="logo--holder">
          <img className="logo" src={logo} alt="react-logo" />
          <h1>React Facts</h1>
        </div>
        <h2 className="project--count">React Course - Project 1</h2>
      </header>
    </div>
  );
}
