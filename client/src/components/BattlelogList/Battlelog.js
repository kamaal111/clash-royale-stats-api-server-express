import React from "react";
import propTypes from "prop-types";

// import Cards from "./Cards";

const Battlelog = props => {
  // let cards;

  //   if (props.opponentCards.length > 0) {
  //     cards = props.opponentCards.map(c => (
  //       <Cards
  //         iconUrls={c.iconUrls.medium}
  //         level={c.level}
  //         maxLevel={c.maxLevel}
  //         name={c.name}
  //       />
  //     ));
  //   }
  return (
    <div>
      <li>{props.arena}</li>
      <li>{props.battleTime}</li>
      <li>{props.deckSelection}</li>
      <li>{props.gameMode}</li>
      <li>{props.opponentName}</li>
      <li>{props.opponentTag}</li>
      <li>{props.opponentStartingTrophies}</li>
      <li>{props.opponentTrophyChange}</li>
      <li>{props.opponentCrown}</li>
      {/* <ul>{cards}</ul> */}

      <li>{props.playertag}</li>
    </div>
  );
};

Battlelog.propTypes = {
  arena: propTypes.string.isRequired,
  battleTime: propTypes.string.isRequired,
  deckSelection: propTypes.string.isRequired,
  gameMode: propTypes.string.isRequired,
  opponentName: propTypes.string.isRequired,
  opponentTag: propTypes.string.isRequired,
  opponentStartingTrophies: propTypes.number.isRequired,
  opponentTrophyChange: propTypes.number.isRequired,
  opponentCrown: propTypes.number.isRequired
};
export default Battlelog;
