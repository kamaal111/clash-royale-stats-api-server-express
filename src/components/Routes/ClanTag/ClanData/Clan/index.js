import React from "react";
import propTypes from "prop-types";

import MemberList from "./MemberList/index";

const Clan = props => (
  <ul>
    <li>Updated At: {props.updatedAt}</li>
    {/* <li>{props.badgeId}</li> */}
    <li>Clan Chest Level: {props.clanChestLevel}</li>
    <li>Clan Chest Max Level: {props.clanChestMaxLevel}</li>
    <li>Clan Score: {props.clanScore}</li>
    <li>Clan War Trophies: {props.clanWarTrophies}</li>
    <li>Donations Per Week: {props.donationsPerWeek}</li>
    <li>Clan Tag: {props.id}</li>
    <li>Member: {props.members}</li>
    <li>Clan Name: {props.name}</li>
    <li>Description: {props.description}</li>
    <li>Required Trophies: {props.requiredTrophies}</li>
    <li>Type: {props.type}</li>
    <li>Country: {props.country}</li>

    <div>
      <MemberList memberList={props.memberList} />
    </div>
  </ul>
);

Clan.propTypes = {
  badgeId: propTypes.number,
  clanChestLevel: propTypes.number.isRequired,
  clanChestMaxLevel: propTypes.number.isRequired,
  clanScore: propTypes.number.isRequired,
  clanWarTrophies: propTypes.number.isRequired,
  donationsPerWeek: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
  members: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  updatedAt: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  memberList: propTypes.array.isRequired,
  requiredTrophies: propTypes.number.isRequired,
  description: propTypes.string
};

export default Clan;
