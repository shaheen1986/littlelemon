import React from "react";
import logo from "../images/Asset 20@4x.png";

const Navigationbar = () => {
  return (
    <>
      <header>
        <div className="brand">
          <div className="brandLogo">
            <a href="/">
              <img src={logo} alt="brandImage" />
            </a>
          </div>
          <div className="brandName">LITTLE LEMON</div>
        </div>
        <nav>
          <ul className="items">
            <li className="navlinks">
              <a href="">Home</a>
            </li>
            <li className="navlinks">
              <a href="">About</a>
            </li>
            <li className="navlinks">
              <a href="">Menu</a>
            </li>
            <li className="navlinks">
              <a href="">Reservation</a>
            </li>
            <li className="navlinks">
              <a href="">OrderOnline</a>
            </li>
            <li className="navlinks">
              <a href="">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigationbar;
