import React from "react";
import propTypes from "prop-types";

import Battlelog from "./Battlelog/index";

const BattlelogList = props => {
  const { datab, playerStatus } = props;
  const checkTeamMate = (data, team, prop) => {
    if (data[team].length > 1) return data[team][1][prop];
    else return "";
  };

  const checkClanMate = (data, team, prop) => {
    if (data[team].length > 1) return data[team][1].clan[prop];
    else return "";
  };

  const checkClan = (data, team, prop) => {
    if (data[team][0].clan) return data[team][0].clan[prop];
    else return "This player has no clan";
  };

  let battlelog;
  let i = 0;

  if (datab[0]) {
    if (datab[0].battlelog.length > 0) {
      battlelog = datab[0].battlelog.map(b => (
        <Battlelog
          updatedAt={datab[0].updatedAt}
          arena={b.arena.name}
          type={b.type}
          battleTime={b.battleTime}
          deckSelection={b.deckSelection}
          gameMode={b.gameMode.name}
          opponentName={b.opponent[0].name}
          opponentNameMate={checkTeamMate(b, "opponent", "name")}
          opponentTag={b.opponent[0].tag}
          opponentTagMate={checkTeamMate(b, "opponent", "tag")}
          opponentStartingTrophies={b.opponent[0].startingTrophies}
          opponentTrophyChange={b.opponent[0].trophyChange}
          opponentCrown={b.opponent[0].crowns}
          opponentCards={b.opponent[0].cards}
          opponentCardsMate={checkTeamMate(b, "opponent", "cards")}
          opponentClanName={checkClan(b, "opponent", "name")}
          opponentClanNameMate={checkClanMate(b, "opponent", "name")}
          opponentClanTag={checkClan(b, "opponent", "tag")}
          opponentClanTagMate={checkClanMate(b, "opponent", "tag")}
          teamName={b.team[0].name}
          teamNameMate={checkTeamMate(b, "team", "name")}
          teamTag={b.team[0].tag}
          teamTagMate={checkTeamMate(b, "team", "tag")}
          teamStartingTrophies={b.team[0].startingTrophies}
          teamTrophyChange={b.team[0].trophyChange}
          teamCrown={b.team[0].crowns}
          teamCards={b.team[0].cards}
          teamCardsMate={checkTeamMate(b, "team", "cards")}
          teamClanName={checkClan(b, "team", "name")}
          teamClanNameMate={checkClanMate(b, "team", "name")}
          teamClanTag={checkClan(b, "team", "tag")}
          teamClanTagMate={checkClanMate(b, "team", "tag")}
          playertag={b.id}
          key={i++}
        />
      ));
    }
  } else return (battlelog = playerStatus);

  return <div>{battlelog}</div>;
};

Battlelog.propTypes = {
  datab: propTypes.array,
  playerStatus: propTypes.string
};

export default BattlelogList;
