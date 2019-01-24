import React from "react";
import Chest from "./Chest";
// import NoChests from "./NoChests";

const ChestList = props => {
  const results = props.data;
  let chests;

  if (results.length > 0) {
    chests = results.map(c => (
      <Chest name={c.name} id={c.idName} key={c._id} />
    ));
  }

  return <ul>{chests}</ul>;
};

export default ChestList;
