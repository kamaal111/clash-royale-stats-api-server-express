import React from "react";
import propTypes from "prop-types";

import Cards from "./Cards/index";

const Team = props => {
  const checkTrophyChange = () => {
    if (props.trophyChange !== null)
      return <li>Trophy Change: {props.trophyChange}</li>;
  };

  const checkClan = name => {
    if (!props[name]) return "This player has no clan";
    else return props[name];
  };

  const checkMate = () => {
    if (props.nameMate)
      return (
        <div>
          <b>2nd Player</b>
          <li>
            {props.title} Name: {props.nameMate}
          </li>
          <li>
            {props.title} Tag: {props.tagMate}
          </li>
          <li>
            {props.title} Clan Name: {checkClan("clanNameMate")}
          </li>
          <li>
            {props.title} Clan Tag Mate: {checkClan("clanTagMate")}
          </li>
          <Cards title={props.title} cards={props.cardsMate} />
        </div>
      );
  };

  return (
    <div>
      <div>
        <b>1st Player</b>
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
      {checkMate()}
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
  cards: propTypes.array.isRequired,
  cardsMate: propTypes.oneOfType([propTypes.string, propTypes.array]),
  tagMate: propTypes.string,
  nameMate: propTypes.string
};

export default Team;
