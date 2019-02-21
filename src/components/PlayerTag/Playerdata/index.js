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
        currentfavouriteCardName={p.currentFavouriteCard.name}
        donations={p.donations}
        donationsReceived={p.donationsReceived}
        totalDonations={p.totalDonations}
        prevBestTrophies={p.leagueStatistics.previousSeason.bestTrophies}
        prevId={p.leagueStatistics.previousSeason.id}
        prevTrophies={p.leagueStatistics.previousSeason.trophies}
        curBestTrophies={p.leagueStatistics.currentSeason.bestTrophies}
        curTrophies={p.leagueStatistics.currentSeason.trophies}
        bestSeasonId={p.leagueStatistics.bestSeason.id}
        bestSeasonTrophies={p.leagueStatistics.bestSeason.trophies}
        expLevel={p.expLevel}
        losses={p.losses}
        wins={p.wins}
        name={p.name}
        role={p.role}
        threeCrownWins={p.threeCrownWins}
        tournamentBattleCount={p.tournamentBattleCount}
        tournamentCardsWon={p.tournamentCardsWon}
        trophies={p.trophies}
        bestTrophies={p.bestTrophies}
        clanName={p.clan.name}
        clanTag={p.clan.tag}
        warDayWins={p.warDayWins}
        updatedAt={p.updatedAt}
        playertag={p.id}
        key={p._id}
      />
    ));
  } else return (playerdata = playerStatus);

  return <div>{playerdata}</div>;
};

Playerdata.propTypes = {
  datap: propTypes.array.isRequired
};

export default Playerdata;
