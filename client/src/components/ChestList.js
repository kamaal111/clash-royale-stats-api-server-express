import React from "react";
import Chest from "./Chest";
// import NoChests from "./NoChests";

const ChestList = props => {
  const { data } = props;
  let chests;

  if (data.length > 0) {
    chests = data.map(c => (
      <Chest name={c.name} id={c.order} playertag={c.id} key={c._id} />
    ));
  }

  return <ul>{chests}</ul>;
};

export default ChestList;
