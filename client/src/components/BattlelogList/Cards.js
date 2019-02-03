import React from "react";
import propTypes from "prop-types";

const Cards = props => (
  <li>
    {props.iconUrls} {props.level} {props.maxLevel} {props.name}
  </li>
);

Cards.propTypes = {
  iconUrls: propTypes.string.isRequired,
  level: propTypes.number.isRequired,
  maxLevel: propTypes.number.isRequired,
  name: propTypes.string.isRequired
};

export default Cards;
