import React from "react";
import propTypes from "prop-types";

import Cards from "./Cards/index";

const Team = props => {
  const checkTrophyChange = () => {
    if (props.trophyChange !== null) {
      return <li>{props.trophyChange}</li>;
    }
  };

  const checkClan = name => {
    if (!props[name]) return "This player has no clan";
    else return props[name];
  };
  return (
    <div>
      <li>
        {props.title} Name: {props.name}
      </li>
      <li>
        {props.title} Tag: {props.tag}
      </li>
      <li>
        {props.title} Starting Trophies: {props.startingTrophies}
      </li>
      {checkTrophyChange()}
      <li>
        {props.title}Crowns: {props.crown}
      </li>
      <li>
        {props.title} Clan Name: {checkClan("clanName")}
      </li>
      <li>
        {props.title} Clan Tag: {checkClan("clanTag")}
      </li>

      <Cards title={props.title} cards={props.cards} />
    </div>
  );
};

Team.propTypes = {
  title: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  startingTrophies: propTypes.number,
  trophyChange: propTypes.number,
  crown: propTypes.number.isRequired,
  clanName: propTypes.string,
  clanTag: propTypes.string,
  cards: propTypes.array.isRequired
};

export default Team;
