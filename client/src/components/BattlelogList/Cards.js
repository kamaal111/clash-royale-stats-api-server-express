import React from "react";

const Cards = props => (
  <li>
    {props.iconUrls} {props.level} {props.maxLevel} {props.name}
  </li>
);

export default Cards;
