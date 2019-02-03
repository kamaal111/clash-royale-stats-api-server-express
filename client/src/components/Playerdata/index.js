import React from "react";
import propTypes from "prop-types";

import Player from "./Player";

const Playerdata = props => {
  const { datap, playerStatus } = props;
  let playerdata;

  if (datap.length > 0) {
    playerdata = datap.map(p => (
      <Player
        arena={p.arena.name}
        battleCount={p.battleCount}
        challengeCardsWon={p.challengeCardsWon}
        challengeMaxWins={p.challengeMaxWins}
        clanCardsCollected={p.clanCardsCollected}
        currentfavouriteCardIcon={p.currentFavouriteCard.iconUrls.medium}
        currentfavouriteCardMaxLevel={p.currentFavouriteCard.maxLevel}
        currentfavouriteCardName={p.currentFavouriteCard.name}
        donations={p.donations}
        donationsReceived={p.donationsReceived}
        totalDonations={p.totalDonations}
        expLevel={p.expLevel}
        losses={p.losses}
        wins={p.wins}
        name={p.name}
        role={p.role}
        threeCrownWins={p.threeCrownWins}
        tournamentBattleCount={p.tournamentBattleCount}
        trophies={p.trophies}
        updatedAt={p.updatedAt}
        playertag={p.id}
        key={p._id}
      />
    ));
  } else return (playerdata = playerStatus);

  return <ul>{playerdata}</ul>;
};

Playerdata.propTypes = {
  datap: propTypes.array.isRequired
};

export default Playerdata;
