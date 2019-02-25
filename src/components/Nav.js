import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/learn">Learn Resources</NavLink>
      </li>
    </ul>
    <hr />
  </nav>
);

export default NavBar;
