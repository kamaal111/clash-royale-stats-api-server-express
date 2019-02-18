import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <ul className="nav-bar">
    <li>
      <NavLink exact to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/chests">Chests</NavLink>
    </li>
    <li>
      <NavLink to="/battlelog">Battlelog</NavLink>
    </li>
  </ul>
);

export default NavBar;
