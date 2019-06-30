import React from 'react';
import propTypes from 'prop-types';

import Team from './Team/index';

const Battlelog = props => {
  const time = date => {
    const s = date.split('');

    let year = `${s.slice(0, 4).join('')}`,
      month = `${s.slice(4, 6).join('')}`,
      day = `${s.slice(6, 8).join('')}`,
      hour = `${s.slice(9, 11).join('')}`,
      minute = `${s.slice(11, 13).join('')}`,
      second = `${s.slice(13, 15).join('')}`;

    return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
  };

  return (
    <ul className="border">
      <li>Arena: {props.arena}</li>
      <li>Type: {props.type}</li>
      <li>Battle Time: {time(props.battleTime)}</li>
      <li>Deck Selection: {props.deckSelection}</li>
      <li>Game Mode: {props.gameMode}</li>

      <br />

      <Team
        title={'Team'}
        name={props.teamName}
        nameMate={props.teamNameMate}
        tag={props.teamTag}
        tagMate={props.teamTagMate}
        startingTrophies={props.teamStartingTrophies}
        trophyChange={props.teamTrophyChange}
        crown={props.teamCrown}
        clanName={props.teamClanName}
        clanNameMate={props.teamClanNameMate}
        clanTag={props.teamClanTag}
        clanTagMate={props.teamClanTagMate}
        cards={props.teamCards}
        cardsMate={props.teamCardsMate}
      />

      <br />

      <Team
        title={'Opponent'}
        name={props.opponentName}
        nameMate={props.opponentNameMate}
        tag={props.opponentTag}
        tagMate={props.opponentTagMate}
        startingTrophies={props.opponentStartingTrophies}
        trophyChange={props.opponentTrophyChange}
        crown={props.opponentCrown}
        clanName={props.opponentClanName}
        clanNameMate={props.opponentClanNameMate}
        clanTag={props.opponentClanTag}
        clanTagMate={props.opponentClanTagMate}
        cards={props.opponentCards}
        cardsMate={props.opponentCardsMate}
      />
    </ul>
  );
};

Battlelog.propTypes = {
  arena: propTypes.string.isRequired,
  battleTime: propTypes.string.isRequired,
  deckSelection: propTypes.string.isRequired,
  gameMode: propTypes.string.isRequired,
  opponentName: propTypes.string.isRequired,
  opponentTag: propTypes.string.isRequired,
  opponentStartingTrophies: propTypes.number,
  opponentTrophyChange: propTypes.number,
  opponentCrown: propTypes.number.isRequired,
  opponentClanName: propTypes.string.isRequired,
  opponentClanTag: propTypes.string,
  opponentCards: propTypes.array,
  teamName: propTypes.string.isRequired,
  teamTag: propTypes.string.isRequired,
  teamStartingTrophies: propTypes.number,
  teamTrophyChange: propTypes.number,
  teamCrown: propTypes.number.isRequired,
  teamClanName: propTypes.string.isRequired,
  teamClanTag: propTypes.string,
  teamCards: propTypes.array,
  opponentCardsMate: propTypes.array,
  opponentClanTagMate: propTypes.string,
  opponentClanNameMate: propTypes.string,
  opponentTagMate: propTypes.string,
  opponentNameMate: propTypes.string,
  teamCardsMate: propTypes.array,
  teamClanTagMate: propTypes.string,
  teamClanNameMate: propTypes.string,
  teamTagMate: propTypes.string,
  teamNameMate: propTypes.string,
  type: propTypes.string.isRequired
};
export default Battlelog;
