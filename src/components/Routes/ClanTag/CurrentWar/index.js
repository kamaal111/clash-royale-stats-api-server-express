import React from "react";
import propTypes from "prop-types";

import Clan from "./Clan/index";

const CurrentWar = props => {
  const { datac, clanStatus } = props;
  let curWar;

  if (datac) {
    if (datac.length > 0) {
      curWar = datac.map(c => (
        <Clan
          // badgeId={c.badgeId}
          state={c.state}
          battlesPlayed={c.clan[0].battlesPlayed}
          clanScore={c.clan[0].clanScore}
          crowns={c.clan[0].crowns}
          wins={c.clan[0].wins}
          name={c.clan[0].name}
          participants={c.clan[0].participants}
          id={c.id}
          participantsList={c.participants}
          key={c._id}
        />
      ));
    }
  } else return (curWar = clanStatus);

  return <div>{curWar}</div>;
};

CurrentWar.propTypes = {
  datac: propTypes.array,
  clanStatus: propTypes.string
};

export default CurrentWar;
