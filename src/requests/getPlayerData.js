"use strict";

// modules
const https = require("https");

// options
const options = require("../lib");

const getPlayerData = () => {
  const req = https.request(options(0, "#998LLUR0R"), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      const Player = require("../schemas/player_schema");

      const parsed = JSON.parse(body);

      Player.deleteMany({}, err => {
        if (err) console.error("1 - Save Failed(player)", err);
        console.log("1 - Refreshing Database(player)");

        Player({
          tag: parsed.tag,
          name: parsed.name,
          expLevel: parsed.expLevel,
          trophies: parsed.trophies,
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
            tag: parsed.clan.tag,
            name: parsed.clan.name,
            badgeId: parsed.clan.badgeId
          },
          arena: { id: parsed.arena.id, name: parsed.arena.name },

          leagueStatistics: {
            currentSeason: {
              trophies: parsed.leagueStatistics.currentSeason.trophies,
              bestTrophies: parsed.leagueStatistics.currentSeason.bestTrophies
            },
            previousSeason: {
              id: parsed.leagueStatistics.previousSeason.id,
              trophies: parsed.leagueStatistics.previousSeason.trophies,
              bestTrophies: parsed.leagueStatistics.previousSeason.bestTrophies
            },
            bestSeason: {
              id: parsed.leagueStatistics.bestSeason.id,
              trophies: parsed.leagueStatistics.bestSeason.trophies
            }
          },

          currentFavouriteCard: {
            name: parsed.currentFavouriteCard.name,
            maxLevel: parsed.currentFavouriteCard.maxLevel,
            iconUrls: { medium: parsed.currentFavouriteCard.iconUrls.medium }
          }
        }).save(function(err) {
          if (err) console.error("2 - Save Failed(player)", err);
        });

        console.log("2 - Saved playerdata");
      });
    });
  });
  req.end();
};

module.exports.getPlayerData = getPlayerData;
