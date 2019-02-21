import React from "react";
import propTypes from "prop-types";

import Chest from "./Chest";

const ChestList = props => {
  const { datac } = props;
  let chests;

  if (datac[0].items.length > 0) {
    chests = datac[0].items.map(c => (
      <Chest name={c.name} id={c.index} key={c.index} />
    ));
  }

  return <ul>{chests}</ul>;
};

ChestList.propTypes = {
  datac: propTypes.array.isRequired
};

export default ChestList;
