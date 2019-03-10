import React from "react";
import propTypes from "prop-types";

const Chest = props => (
  <li>
    {props.name} {props.id} {props.updatedAt}
  </li>
);

Chest.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired
};

export default Chest;
