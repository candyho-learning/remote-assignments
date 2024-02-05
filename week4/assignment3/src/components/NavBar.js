import React from "react";

export default function NavBar({ openMenu }) {
  return (
    <nav>
      <img id="logo" src="/waveless-logo.svg" alt="logo" />
      <i className="fa-solid fa-bars hamburger-menu" onClick={openMenu}></i>
      <div className="menu-items">
        <a href="#">Item1</a>
        <a href="#">Item2</a>
        <a href="#">Item3</a>
        <a href="#">Item4</a>
      </div>
    </nav>
  );
}
