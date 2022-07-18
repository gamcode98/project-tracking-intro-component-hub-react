import React, { useState } from "react";
import logo from "./../assets/img/logo.svg";
import iconHamburger from "./../assets/img/icon-hamburger.svg";
import iconClose from "./../assets/img/icon-close.svg";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  window.addEventListener("resize", () => setClicked(false));
  window.addEventListener("scroll", () => setClicked(false));

  return (
    <>
      <header className="wrapper">
        <img src={logo} alt="logo" title="logo" />
        <nav className={`${clicked ? "isActive" : ""}`}>
          <ul>
            <li>
              <a href="#h">Product</a>
            </li>
            <li>
              <a href="#h">Features</a>
            </li>
            <li>
              <a href="#h">Pricing</a>
            </li>
            <li>
              <a href="#h">Login</a>
            </li>
          </ul>
        </nav>
        <button className="btn-hamburger" onClick={handleClick}>
          <img
            src={`${clicked ? iconClose : iconHamburger}`}
            alt={`${clicked ? "icon close" : "icon hamburger"}`}
            title={`${clicked ? "icon close" : "icon hamburger"}`}
          />
        </button>
      </header>
    </>
  );
};

export default Header;
