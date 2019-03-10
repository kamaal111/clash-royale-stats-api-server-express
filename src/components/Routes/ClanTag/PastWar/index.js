import React from "react";
import propTypes from "prop-types";

import War from "./War/index";

const pastWar = props => {
  const { datap, clanStatus } = props;
  let pastWar;
  let i = 0;

  if (datap.length > 0) {
    pastWar = datap[0].items.map(p => (
      <War
        createdDate={p[0].createdDate}
        seasonId={p[0].seasonId}
        participants={p[0].participants}
        standings={p[0].standings}
        // key={p[0]._id}
        key={i++}
      />
    ));
  } else return (pastWar = clanStatus);
  return <div>{pastWar}</div>;
};

pastWar.propTypes = {
  datap: propTypes.array
};

export default pastWar;
