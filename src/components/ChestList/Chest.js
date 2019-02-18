import React from "react";
import propTypes from "prop-types";

const Chest = props => (
  <li>
    {props.name} {props.id}
  </li>
);

Chest.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired
};

export default Chest;