import React from "react";
// import propTypes from "prop-types";

import MemberList from "./MemberList/index";

const Clan = props => (
  <ul>
    <li>State: {props.state}</li>
    {/* <li>{props.badgeId}</li> */}
    <li>Battle Played: {props.battlesPlayed}</li>
    <li>Clan Score: {props.clanScore}</li>
    <li>Crown: {props.crowns}</li>
    <li>Wins: {props.wins}</li>
    <li>Clan Name: {props.name}</li>
    <li>Clan Tag: {props.id}</li>
    <li>Participants: {props.participants}</li>

    <div>
      <MemberList memberList={props.participantsList} />
    </div>
  </ul>
);

// Clan.propTypes = {

// };

export default Clan;
