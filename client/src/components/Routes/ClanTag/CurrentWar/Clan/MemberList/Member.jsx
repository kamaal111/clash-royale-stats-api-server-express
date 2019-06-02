import React from "react";
import propTypes from "prop-types";

const Member = props => {
  return (
    <ul className={"border"}>
      <b>Member</b>
      {/* <h1>{props.length}</h1> */}
      <li>Name: {props.name}</li>
      <li>Tag: {props.tag}</li>
      <li>Wins: {props.wins}</li>
      <li>Battles Played: {props.battlesPlayed}</li>
      <li>Cards Earned: {props.cardsEarned}</li>
      <li>Collection Day Battles Played: {props.collectionDayBattlesPlayed}</li>
    </ul>
  );
};

Member.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  wins: propTypes.number.isRequired,
  battlesPlayed: propTypes.number.isRequired,
  cardsEarned: propTypes.number.isRequired,
  collectionDayBattlesPlayed: propTypes.number.isRequired
};

export default Member;
