import React from "react";
import propTypes from "prop-types";

const Member = props => {
  return (
    <ul className={"border"}>
      <b>Member</b>
      <li>Clan Rank: {props.clanRank}</li>
      <li>Previous Clan Rank: {props.previousClanRank}</li>
      <li>Name: {props.name}</li>
      <li>Tag: {props.tag}</li>
      <li>Trophies: {props.trophies}</li>
      <li>Exp Level: {props.expLevel}</li>
      <li>Role: {props.role}</li>
      <li>Arena: {props.arena}</li>
      <li>Clan Chest Points: {props.clanChestPoints}</li>
      <li>Donations: {props.donations}</li>
      <li>Donation Received: {props.donationsReceived}</li>
    </ul>
  );
};

Member.propTypes = {
  trophies: propTypes.number.isRequired,
  expLevel: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  arena: propTypes.string.isRequired,
  clanChestPoints: propTypes.number.isRequired,
  donations: propTypes.number.isRequired,
  donationsReceived: propTypes.number.isRequired,
  previousClanRank: propTypes.number.isRequired
};

export default Member;
