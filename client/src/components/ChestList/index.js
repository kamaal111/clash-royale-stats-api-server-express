import React from "react";
import Chest from "./Chest";
// import NoChests from "./NoChests";

const ChestList = props => {
  const { datac } = props;
  let chests;

  if (datac.length > 0) {
    chests = datac.map(c => <Chest name={c.name} id={c.order} key={c._id} />);
  }

  return <ul>{chests}</ul>;
};

export default ChestList;
