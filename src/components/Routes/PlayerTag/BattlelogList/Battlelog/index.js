import React from "react";
import propTypes from "prop-types";

import Team from "./Team/index";

const Battlelog = props => {
  return (
    <ul className="border">
      <li>Arena: {props.arena}</li>
      <li>Type: {props.type}</li>
      <li>Battle Time: {props.battleTime}</li>
      <li>Deck Selection: {props.deckSelection}</li>
      <li>Game Mode: {props.gameMode}</li>

      <br />

      <Team
        title={"Team"}
        name={props.teamName}
        nameMate={props.teamNameMate}
        tag={props.teamTag}
        tagMate={props.teamTagMate}
        startingTrophies={props.teamStartingTrophies}
        trophyChange={props.teamTrophyChange}
        crown={props.teamCrown}
        clanName={props.teamClanName}
        clanNameMate={props.teamClanNameMate}
        clanTag={props.teamClanTag}
        clanTagMate={props.teamClanTagMate}
        cards={props.teamCards}
        cardsMate={props.teamCardsMate}
      />

      <br />

      <Team
        title={"Opponent"}
        name={props.opponentName}
        nameMate={props.opponentNameMate}
        tag={props.opponentTag}
        tagMate={props.opponentTagMate}
        startingTrophies={props.opponentStartingTrophies}
        trophyChange={props.opponentTrophyChange}
        crown={props.opponentCrown}
        clanName={props.opponentClanName}
        clanNameMate={props.opponentClanNameMate}
        clanTag={props.opponentClanTag}
        clanTagMate={props.opponentClanTagMate}
        cards={props.opponentCards}
        cardsMate={props.opponentCardsMate}
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
