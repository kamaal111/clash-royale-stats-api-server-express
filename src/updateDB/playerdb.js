"use strict";

const Player = require("../schemas/player_schema");

const playerdb = (player, parsed) => {
  const checkFavoCard = name => {
    if (parsed.currentFavouriteCard) return parsed.currentFavouriteCard[name];
    else return "";
  };

  const checkFavoCardImg = () => {
    if (parsed.currentFavouriteCard)
      return parsed.currentFavouriteCard.iconUrls.medium;
    else return "";
  };

  // Check for clan
  const checkClan = team => {
    if (parsed.clan) return parsed.clan[team];
    else return "";
  };

  // Check for league statistics
  const checkLeague = (team, name) => {
    if (parsed.leagueStatistics) {
      return parsed.leagueStatistics[team][name];
    } else return "";
  };

  Player.deleteMany({ id: player }, function(err) {
    if (err) console.error(`1 - Save Failed(player) ${player}`, err);
    console.log(`1 - Refreshing Database(player) ${player}`);

    Player({
      id: player,
      name: parsed.name,
      expLevel: parsed.expLevel,
      trophies: parsed.trophies,
      bestTrophies: parsed.bestTrophies,
      wins: parsed.wins,
      losses: parsed.losses,
      battleCount: parsed.battleCount,
      threeCrownWins: parsed.threeCrownWins,
      challengeCardsWon: parsed.challengeCardsWon,
      challengeMaxWins: parsed.challengeMaxWins,
      tournamentCardsWon: parsed.tournamentCardsWon,
      tournamentBattleCount: parsed.tournamentBattleCount,
      role: parsed.role,
      donations: parsed.donations,
      donationsReceived: parsed.donationsReceived,
      totalDonations: parsed.totalDonations,
      warDayWins: parsed.warDayWins,
      warDayWins: parsed.warDayWins,
      clanCardsCollected: parsed.clanCardsCollected,

      clan: {
        tag: checkClan("tag"),
        name: checkClan("name"),
        badgeId: checkClan("badgeId")
      },

      arena: { id: parsed.arena.id, name: parsed.arena.name },

      leagueStatistics: {
        currentSeason: {
          trophies: checkLeague("currentSeason", "trophies"),
          bestTrophies: checkLeague("currentSeason", "bestTrophies")
        },
        previousSeason: {
          id: checkLeague("previousSeason", "id"),
          trophies: checkLeague("previousSeason", "trophies"),
          bestTrophies: checkLeague("previousSeason", "bestTrophies")
        },
        bestSeason: {
          id: checkLeague("bestSeason", "id"),
          trophies: checkLeague("bestSeason", "trophies")
        }
      },

      currentFavouriteCard: {
        name: checkFavoCard("name"),
        maxLevel: checkFavoCard("maxLevel"),
        iconUrls: { medium: checkFavoCardImg() }
      }
    }).save(function(err) {
      if (err) console.error(`2 - Save Failed(player) ${player}`, err);
    });
    console.log(`2 - Saved playerdata ${player}`);
  });
};

module.exports = playerdb;
