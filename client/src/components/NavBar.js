import React from "react";
import propTypes from "prop-types";
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

NavBar.propTypes = {
  firLink: propTypes.string.isRequired,
  firTitle: propTypes.string.isRequired,
  secLink: propTypes.string.isRequired,
  secTitle: propTypes.string.isRequired,
  thirLink: propTypes.string.isRequired,
  thirTitle: propTypes.string.isRequired
};

export default NavBar;
