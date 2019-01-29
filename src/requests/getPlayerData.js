"use strict";

// modules
const https = require("https");

// options
const options = require("../lib");

// "#998LLUR0R"

const getPlayerData = playertag => {
  const req = https.request(options(0, playertag), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      const Player = require("../schemas/player_schema");

      const parsed = JSON.parse(body);
      // console.log(parsed);

      let player = playertag;

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
    });
  });
  req.end();
};

module.exports.getPlayerData = getPlayerData;
