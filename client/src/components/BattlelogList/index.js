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
        opponentName={b.opponent.name}
        opponentTag={b.opponent.tag}
        opponentStartingTrophies={b.opponent.startingTrophies}
        opponentTrophyChange={b.opponent.trophyChange}
        opponentCrown={b.opponent.crown}
        // opponentCards={b.opponent.cards}
        playertag={b.id}
        key={b._id}
      />
    ));
  }

  return <ul>{battlelog}</ul>;
};

Battlelog.propTypes = {
  datab: propTypes.array
};

export default BattlelogList;
