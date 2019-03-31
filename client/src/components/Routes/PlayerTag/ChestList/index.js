import React from "react";
import propTypes from "prop-types";

import Chest from "./Chest";

const ChestList = props => {
  const { datac, playerStatus } = props;
  let chests;

  if (datac[0]) {
    if (datac[0].items.length > 0) {
      chests = datac[0].items.map(c => (
        <Chest name={c.name} id={c.index} key={c.index} />
      ));
    }
  } else return (chests = playerStatus);

  return <ul>{chests}</ul>;
};

ChestList.propTypes = {
  datac: propTypes.array.isRequired,
  playerStatus: propTypes.string
};

export default ChestList;
