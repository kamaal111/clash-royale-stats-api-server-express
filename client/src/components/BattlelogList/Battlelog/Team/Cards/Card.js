import React from "react";
import propTypes from "prop-types";

const Card = props => {
  return (
    <li>
      Name: {props.name}
      <img alt="" src={props.img} />
      Level: {props.lvl}
      Max Level: {props.maxlvl}
    </li>
  );
};

Card.propTypes = {
  // name: propTypes.string.isRequired,
  // lvl: propTypes.number.isRequired,
  // maxlvl: propTypes.number.isRequired
  // img: propTypes.string.isRequired
};

export default Card;
