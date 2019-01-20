import React from "react";
import Chest from "./Chest";
// import NoChests from "./NoChests";

const ChestList = props => {
  props.func();
  const results = props.data;
  let chests;
  if (results.length > 0) {
    chests = results.map(c => <Chest name={c.name} id={c.idName} />);
  }

  return <ul>{chests}</ul>;
};

export default ChestList;
