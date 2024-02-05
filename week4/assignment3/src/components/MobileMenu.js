import React from "react";

export default function MobileMenu({ showMobileMenu, closeMenu }) {
  return (
    <div className={`mobile-menu ${showMobileMenu ? "" : "hidden"}`}>
      <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
      <a href="#">Item1</a>
      <a href="#">Item2</a>
      <a href="#">Item3</a>
      <a href="#">Item4</a>
    </div>
  );
}
