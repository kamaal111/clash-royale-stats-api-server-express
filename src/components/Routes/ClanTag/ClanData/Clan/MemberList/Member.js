import React from "react";
// import propTypes from "prop-types";

const Member = props => {
  return (
    <ul>
      <b>Member</b>
      <li>Trophies: {props.trophies}</li>
      <li>Exp Level: {props.expLvel}</li>
      <li>Name: {props.name}</li>
      <li>Tag: {props.tag}</li>
      <li>Role: {props.role}</li>
      <li>Arena: {props.arena}</li>
      <li>Clan Chest Points: {props.clanChestPoints}</li>
      <li>Clan Rank: {props.clanRank}</li>
      <li>Donations: {props.donations}</li>
      <li>Donation Received: {props.donationsReceived}</li>
      <li>Previous Clan Rank: {props.previousClanRank}</li>
    </ul>
  );
};

export default Member;
