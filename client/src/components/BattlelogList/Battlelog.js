import React from "react";
import propTypes from "prop-types";

// import Cards from "./Cards";

const Battlelog = props => {
  return (
    <ul>
      <li>Arena: {props.arena}</li>
      <li>Battle Time: {props.battleTime}</li>
      <li>Deck Selection: {props.deckSelection}</li>
      <li>Game Mode: {props.gameMode}</li>
      <li>Opponent Name: {props.opponentName}</li>
      <li>Opponent Tag: {props.opponentTag}</li>
      {/* <li>{props.opponentStartingTrophies}</li> */}
      {/* <li>{props.opponentTrophyChange}</li> */}
      <li>Opponent Crowns: {props.opponentCrown}</li>
      <li>Opponent Clan Name: {props.opponentClanName}</li>
      <li>Opponent Clan Tag: {props.opponentClanTag}</li>
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
  opponentClanTag: propTypes.string
};
export default Battlelog;
