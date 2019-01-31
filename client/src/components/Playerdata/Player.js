import React from "react";

const Player = props => {
  return (
    <div>
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
    </div>
  );
};
export default Player;
