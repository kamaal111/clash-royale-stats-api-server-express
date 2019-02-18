import React from "react";
import propTypes from "prop-types";

import Chest from "./Chest";

const ChestList = props => {
  const { datac } = props;
  let chests;

  if (datac.length > 0) {
    chests = datac.map(c => <Chest name={c.name} id={c.order} key={c._id} />);
  }

  return <ul>{chests}</ul>;
};

ChestList.propTypes = {
  datac: propTypes.array.isRequired
};

export default ChestList;
