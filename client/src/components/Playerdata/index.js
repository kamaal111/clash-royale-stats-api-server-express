import React from "react";
import Player from "./Player";

const Playerdata = props => {
  const { datap } = props;
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
        donationsRecieved={p.donationsRecieved}
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
  }

  return <ul>{playerdata}</ul>;
};

export default Playerdata;
