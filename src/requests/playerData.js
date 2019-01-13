"use strict";

// modules
const https = require("https");

// options
const options = require("../lib");

const getPlayerData = () => {
  const req = https.request(options(0), res => {
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

const getChest = () => {
  const req = https.request(options(1), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      const Chest = require("../schemas/chest_schema");

      const parsed = JSON.parse(body);

      let count = 0;
      Chest.deleteMany({}, err => {
        if (err) console.error("1 - Save Failed(chest)", err);
        console.log("1 - Refreshing Database(chest)");

        do {
          let item = parsed.items[count];
          Chest({
            name: item.name,
            idName: item.index
          }).save(function(err) {
            if (err) console.error("2 - Save Failed(chest)", err);
          });
          count++;
        } while (count < parsed.items.length);
        console.log("2 - Saved Chests");
      });
    });
  });

  req.end();
};

const getBattlelog = () => {
  const req = https.request(options(2), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      const Battlelog = require("../schemas/battlelog_schema");

      const parsed = JSON.parse(body);
      console.log(parsed[0]);

      let i = 0;
      let log = parsed[i];
      Battlelog.deleteMany({}, err => {
        if (err) console.error("1 - Save Failed(battlelog)", err);
        console.log("1 - Refreshing Database(battlelog)");

        do {
          Battlelog({
            type: log.type,
            battleTime: log.battleTime,

            arena: { id: log.arena.id, name: log.arena.name },

            gameMode: { id: log.gameMode.id, name: log.gameMode.name },

            deckSelection: log.deckSelection,

            team: { tag: log.team.tag }
          }).save(function(err) {
            if (err) console.error("2 - Save Failed(battlelog)", err);
          });
          count++;
        } while (count < parsed.length);

        console.log("2 - Saved battlelog");
      });
    });
  });

  req.end();
};

module.exports.getChest = getChest;
module.exports.getPlayerData = getPlayerData;
module.exports.getBattlelog = getBattlelog;
