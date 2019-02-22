import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => (
  <ul className="nav-bar">
    <li>
      <NavLink exact to={`/${props.firLink}`}>
        {props.firTitle}
      </NavLink>
    </li>
    <li>
      <NavLink to={`/${props.secLink}`}>{props.secTitle}</NavLink>
    </li>
    <li>
      <NavLink to={`/${props.thirLink}`}>{props.thirTitle}</NavLink>
    </li>
  </ul>
);

export default NavBar;
