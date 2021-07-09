import React from "react";
import "../style.css";
const Navbar = (props) => {
  return (
    <nav aria-label="Primary" class="navigation">
      <ul class="menu">
        <li class="menu-li">
            Home
        </li>
        <li class="menu-li">
            Products
        </li>
        <li class="menu-li">
            About
        </li>
        <li class="menu-li">
            Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
