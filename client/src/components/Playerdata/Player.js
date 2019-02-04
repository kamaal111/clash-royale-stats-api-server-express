import React from "react";
import propTypes from "prop-types";

const Player = props => {
  return (
    <div>
      <b>Trophies</b>
      <ul>
        <li>sas</li>
      </ul>

      <b>What</b>
      <ul>
        <li>Arena: {props.arena}</li>
        <li>battle count: {props.battleCount}</li>
        <li>Challenge cards won: {props.challengeCardsWon}</li>
        <li>Challenge max wins: {props.challengeMaxWins}</li>
        <li>Clan Cards Collected: {props.clanCardsCollected}</li>
        <li>currentfavourite Card Icon: {props.currentfavouriteCardIcon}</li>
        <li>
          currentfavourite Card Max Level: {props.currentfavouriteCardMaxLevel}
        </li>
        <li>currentfavourite Card Name: {props.currentfavouriteCardName}</li>
        <li>donations: {props.donations}</li>
        <li>donations Received: {props.donationsReceived}</li>
        <li>total Donations: {props.totalDonations}</li>
        <li>exp Level: {props.expLevel}</li>
        <li>losses: {props.losses}</li>
        <li>wins: {props.wins}</li>
        <li>name: {props.name}</li>
        <li>role: {props.role}</li>
        <li>three Crown Wins: {props.threeCrownWins}</li>
        <li>tournament Battle Count: {props.tournamentBattleCount}</li>
        <li>trophies: {props.trophies}</li>
        <li>updated At: {props.updatedAt}</li>
        <li>playertag: {props.playertag}</li>
      </ul>
    </div>
  );
};
Player.propTypes = {
  arena: propTypes.string.isRequired,
  battleCount: propTypes.number.isRequired,
  challengeCardsWon: propTypes.number.isRequired,
  challengeMaxWins: propTypes.number.isRequired,
  clanCardsCollected: propTypes.number.isRequired,
  currentfavouriteCardIcon: propTypes.string.isRequired,
  currentfavouriteCardMaxLevel: propTypes.number.isRequired,
  currentfavouriteCardName: propTypes.string.isRequired,
  donations: propTypes.number.isRequired,
  donationsReceived: propTypes.number.isRequired,
  totalDonations: propTypes.number.isRequired,
  expLevel: propTypes.number.isRequired,
  losses: propTypes.number.isRequired,
  wins: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  threeCrownWins: propTypes.number.isRequired,
  tournamentBattleCount: propTypes.number.isRequired,
  trophies: propTypes.number.isRequired,
  updatedAt: propTypes.string.isRequired,
  playertag: propTypes.string.isRequired
};
export default Player;
