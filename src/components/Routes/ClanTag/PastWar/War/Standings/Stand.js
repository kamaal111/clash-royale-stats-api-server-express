import React from "react";
import propTypes from "prop-types";

const Stand = props => (
  <ul>
    <b>Clan</b>
    <li>Name: {props.name}</li>
    <li>Participants: {props.participants}</li>
    <li>Tag: {props.tag}</li>
    <li>Wins: {props.wins}</li>
    <li>Battles Played: {props.battlesPlayed}</li>
    <li>Trophy Change: {props.trophyChange}</li>
    <li>Clan Score: {props.clanScore}</li>
    <li>Crowns: {props.crowns}</li>
  </ul>
);

Stand.propTypes = {
  trophyChange: propTypes.number.isRequired,
  battlesPlayed: propTypes.number.isRequired,
  clanScore: propTypes.number.isRequired,
  crowns: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  participants: propTypes.number.isRequired,
  tag: propTypes.string.isRequired,
  wins: propTypes.number.isRequired
};

export default Stand;
