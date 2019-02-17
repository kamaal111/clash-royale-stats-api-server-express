import React from "react";
import propTypes from "prop-types";

import Team from "./Team/index";

const Battlelog = props => {
  return (
    <ul className={"battlelog"}>
      <li>Arena: {props.arena}</li>
      <li>Type: {props.type}</li>
      <li>Battle Time: {props.battleTime}</li>
      <li>Deck Selection: {props.deckSelection}</li>
      <li>Game Mode: {props.gameMode}</li>

      <br />

      <Team
        title={"Team"}
        name={props.teamName}
        tag={props.teamTag}
        startingTrophies={props.teamStartingTrophies}
        trophyChange={props.teamTrophyChange}
        crown={props.teamCrown}
        clanName={props.teamClanName}
        clanTag={props.teamClanTag}
        cards={props.teamCards}
      />

      <br />

      <Team
        title={"Opponent"}
        name={props.opponentName}
        tag={props.opponentTag}
        startingTrophies={props.opponentStartingTrophies}
        trophyChange={props.opponentTrophyChange}
        crown={props.opponentCrown}
        clanName={props.opponentClanName}
        clanTag={props.opponentClanTag}
        cards={props.opponentCards}
      />
    </ul>
  );
};

Battlelog.propTypes = {
  arena: propTypes.string.isRequired,
  battleTime: propTypes.string.isRequired,
  deckSelection: propTypes.string.isRequired,
  gameMode: propTypes.string.isRequired,
  opponentName: propTypes.string.isRequired,
  opponentTag: propTypes.string.isRequired,
  opponentStartingTrophies: propTypes.number,
  opponentTrophyChange: propTypes.number,
  opponentCrown: propTypes.number.isRequired,
  opponentClanName: propTypes.string.isRequired,
  opponentClanTag: propTypes.string,
  opponentCards: propTypes.array,
  teamName: propTypes.string.isRequired,
  teamTag: propTypes.string.isRequired,
  teamStartingTrophies: propTypes.number,
  teamTrophyChange: propTypes.number,
  teamCrown: propTypes.number.isRequired,
  teamClanName: propTypes.string.isRequired,
  teamClanTag: propTypes.string,
  teamCards: propTypes.array
};
export default Battlelog;
