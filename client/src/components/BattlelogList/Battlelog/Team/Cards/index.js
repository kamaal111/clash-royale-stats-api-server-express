import React from "react";
import propTypes from "prop-types";

import Card from "./Card";

const Cards = props => {
  const { cards, title } = props;
  let card;

  if (cards.length > 0) {
    card = cards.map(c => (
      <Card
        name={c.name}
        img={c.iconUrls.medium}
        lvl={c.level}
        maxlvl={c.maxLevel}
        key={c._id}
      />
    ));
  }

  return (
    <div>
      <b>{title} Cards:</b>
      <ul>{card}</ul>
    </div>
  );
};

Cards.propTypes = {
  // name: propTypes.string.isRequired,
  // lvl: propTypes.number.isRequired,
  // maxlvl: propTypes.number.isRequired
  // img: propTypes.string.isRequired
};

export default Cards;
