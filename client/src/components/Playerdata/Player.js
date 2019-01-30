import React from "react";

const Player = props => {
  return (
    <div>
      <li>{props.arena}</li>
      <li>{props.battleCount}</li>
      <li>{props.challengeCardsWon}</li>
      <li>{props.challengeMaxWins}</li>
      <li>{props.clanCardsCollected}</li>
      <li>{props.currentfavouriteCardIcon}</li>
      <li>{props.currentfavouriteCardMaxLevel}</li>
      <li>{props.currentfavouriteCardName}</li>
      <li>{props.donations}</li>
      <li>{props.donationsRecieved}</li>
      <li>{props.totalDonations}</li>
      <li>{props.expLevel}</li>
      <li>{props.losses}</li>
      <li>{props.wins}</li>
      <li>{props.name}</li>
      <li>{props.role}</li>
      <li>{props.threeCrownWins}</li>
      <li>{props.tournamentBattleCount}</li>
      <li>{props.trophies}</li>
      <li>{props.updatedAt}</li>
      <li>{props.playertag}</li>
    </div>
  );
};
export default Player;
