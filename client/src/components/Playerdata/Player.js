import React from "react";
import propTypes from "prop-types";

const Player = props => {
  return (
    <div>
      <p>updated At: {props.updatedAt}</p>

      <ul>
        <b>Trophies</b>
        <li>Trophies: {props.trophies}</li>
        <li>Best Trophies: {props.bestTrophies}</li>
      </ul>

      <ul>
        <b>Stats</b>
        <li>Wins: {props.wins}</li>
        <li>Losses: {props.losses}</li>
        <li>Three Crown Wins: {props.threeCrownWins}</li>
        <li>Total Donations: {props.totalDonations}</li>
      </ul>

      <ul>
        <b>Clan War Stats</b>
        <li>Clan Cards Collected: {props.clanCardsCollected}</li>
      </ul>

      <ul>
        <b>Challenge Stats</b>
        <li>Challenge max wins: {props.challengeMaxWins}</li>
        <li>Challenge cards won: {props.challengeCardsWon}</li>
        <li>Battle Count: {props.battleCount}</li>
      </ul>

      <ul>
        <b>Tournament Stats</b>
        <li>tournament Battle Count: {props.tournamentBattleCount}</li>
        <li>tournamentCardsWon: {props.tournamentCardsWon}</li>
      </ul>

      <ul>
        <b>Previous Season</b>
        <li>Season: {props.prevId}</li>
        <li>Trophies: {props.prevTrophies}</li>
      </ul>

      <ul>
        <b>Best Season</b>
        <li>Season: {props.bestSeasonId}</li>
        <li>Trophies: {props.bestSeasonTrophies}</li>
      </ul>

      <ul>
        <b>Current Season</b>
        <li>Current Best Trophies: {props.curBestTrophies}</li>
        <li>Current Trophies: {props.curTrophies}</li>
      </ul>

      <ul>
        <b>League Season</b>
        <li>Arena: {props.arena}</li>
      </ul>

      <ul>
        <li>Current Favourite Card Name: {props.currentfavouriteCardName}</li>
        <img alt="" src={props.currentfavouriteCardIcon} />
        <li>
          CurrentFavourite Card Max Level: {props.currentfavouriteCardMaxLevel}
        </li>

        <li>Donations: {props.donations}</li>
        <li>Donations Received: {props.donationsReceived}</li>

        <li>Exp Level: {props.expLevel}</li>

        <li>Name: {props.name}</li>
        <li>Role: {props.role}</li>

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
  prevId: propTypes.string.isRequired,
  prevTrophies: propTypes.number.isRequired,
  bestSeasonId: propTypes.string.isRequired,
  bestSeasonTrophies: propTypes.number.isRequired,
  curTrophies: propTypes.number.isRequired,
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
