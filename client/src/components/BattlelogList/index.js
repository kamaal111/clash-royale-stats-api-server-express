import React from "react";
import propTypes from "prop-types";

import Battlelog from "./Battlelog/index";

const BattlelogList = props => {
  const { datab } = props;
  let battlelog;

  if (datab.length > 0) {
    battlelog = datab.map(b => (
      <Battlelog
        arena={b.arena.name}
        type={b.type}
        battleTime={b.battleTime}
        deckSelection={b.deckSelection}
        gameMode={b.gameMode.name}
        opponentName={b.opponent[0].name}
        opponentTag={b.opponent[0].tag}
        opponentStartingTrophies={b.opponent[0].startingTrophies}
        opponentTrophyChange={b.opponent[0].trophyChange}
        opponentCrown={b.opponent[0].crowns}
        opponentCards={b.opponent[0].cards.cards}
        opponentClanName={b.opponent[0].clan.name}
        opponentClanTag={b.opponent[0].clan.tag}
        teamName={b.team[0].name}
        teamTag={b.team[0].tag}
        teamStartingTrophies={b.team[0].startingTrophies}
        teamTrophyChange={b.team[0].trophyChange}
        teamCrown={b.team[0].crowns}
        teamCards={b.team[0].cards.cards}
        teamClanName={b.team[0].clan.name}
        teamClanTag={b.team[0].clan.tag}
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
