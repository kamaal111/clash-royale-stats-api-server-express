import React from "react";
import propTypes from "prop-types";

import Battlelog from "./Battlelog";

const BattlelogList = props => {
  const { datab } = props;
  let battlelog;

  if (datab.length > 0) {
    battlelog = datab.map(b => (
      <Battlelog
        arena={b.arena.name}
        battleTime={b.battleTime}
        deckSelection={b.deckSelection}
        gameMode={b.gameMode.name}
        opponentName={b.opponent[0].name}
        opponentTag={b.opponent[0].tag}
        opponentStartingTrophies={b.opponent[0].startingTrophies}
        opponentTrophyChange={b.opponent[0].trophyChange}
        opponentCrown={b.opponent[0].crowns}
        // opponentCards={b.opponent[0].cards}
        opponentClanName={b.opponent[0].clan.name}
        opponentClanTag={b.opponent[0].clan.tag}
        playertag={b.id}
        key={b._id}
      />
    ));
  }

  return <div>{battlelog}</div>;
};

Battlelog.propTypes = {
  datab: propTypes.array
};

export default BattlelogList;
