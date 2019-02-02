"use strict";

// modules
const https = require("https"),
  http = require("http");

// options
const options = require("../lib");

const getPlayerData = (playertag, callback) => {
  let player = playertag;

  const req = https.request(options(0, player), res => {
    if (res.statusCode === 200) {
      let body = "";

      res.on("data", function(data) {
        body += data;
      });

      res.on("end", function() {
        const Player = require("../schemas/player_schema");

        const parsed = JSON.parse(body);

        Player.deleteMany({ id: player }, function(err) {
          if (err) console.error(`1 - Save Failed(player) ${player}`, err);
          console.log(`1 - Refreshing Database(player) ${player}`);

          Player({
            id: player,
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

            // clan: {
            //   tag: parsed.clan.tag,
            //   name: parsed.clan.name,
            //   badgeId: parsed.clan.badgeId
            // },

            arena: { id: parsed.arena.id, name: parsed.arena.name },

            // leagueStatistics: {
            //   currentSeason: {
            //     trophies: parsed.leagueStatistics.currentSeason.trophies,
            //     bestTrophies: parsed.leagueStatistics.currentSeason.bestTrophies
            //   },
            //   previousSeason: {
            //     id: parsed.leagueStatistics.previousSeason.id,
            //     trophies: parsed.leagueStatistics.previousSeason.trophies,
            //     bestTrophies: parsed.leagueStatistics.previousSeason.bestTrophies
            //   },
            //   bestSeason: {
            //     id: parsed.leagueStatistics.bestSeason.id,
            //     trophies: parsed.leagueStatistics.bestSeason.trophies
            //   }
            // },

            currentFavouriteCard: {
              name: parsed.currentFavouriteCard.name,
              maxLevel: parsed.currentFavouriteCard.maxLevel,
              iconUrls: { medium: parsed.currentFavouriteCard.iconUrls.medium }
            }
          }).save(function(err) {
            if (err) console.error(`2 - Save Failed(player) ${player}`, err);
          });
          console.log(`2 - Saved playerdata ${player}`);
        });
        const statusCode = http.STATUS_CODES[res.statusCode];
        const statusCodeError = new Error(statusCode);
        return callback(statusCodeError.message);
      });
    } else {
      const statusCode = http.STATUS_CODES[res.statusCode];
      const statusCodeError = new Error(statusCode);
      return callback(statusCodeError.message);
    }
  });
  req.end();
};

module.exports.getPlayerData = getPlayerData;
