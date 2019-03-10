import React from "react";
import propTypes from "prop-types";

import Stand from "./Stand";

const Standings = props => {
  const { standings } = props;
  let stand;
  let i = 0;

  if (standings.length > 0) {
    stand = standings.map(s => (
      <Stand
        trophyChange={s.trophyChange}
        battlesPlayed={s.clan.battlesPlayed}
        clanScore={s.clan.clanScore}
        crowns={s.clan.crowns}
        name={s.clan.name}
        participants={s.clan.participants}
        tag={s.clan.tag}
        wins={s.clan.wins}
        key={i++}
      />
    ));
  }
  return <div>{stand}</div>;
};

Standings.propTypes = {
  standings: propTypes.array.isRequired
};

export default Standings;
