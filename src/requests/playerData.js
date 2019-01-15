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

const getChest = () => {
  const req = https.request(options(1, "#998LLUR0R"), res => {
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
  const req = https.request(options(2, "#998LLUR0R"), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      const Battlelog = require("../schemas/battlelog_schema");

      const parsed = JSON.parse(body);

      let count = 0;

      Battlelog.deleteMany({}, err => {
        if (err) console.error("1 - Save Failed(battlelog)", err);
        console.log("1 - Refreshing Database(battlelog)");

        do {
          let log = parsed[count];

          for (let i = 0; i < log.team.length; i++) {
            Battlelog({
              type: log.type,
              battleTime: log.battleTime,

              arena: { id: log.arena.id, name: log.arena.name },

              gameMode: { id: log.gameMode.id, name: log.gameMode.name },

              deckSelection: log.deckSelection,

              team: [
                {
                  tag: log.team[i].tag,
                  name: log.team[i].name,
                  startingTrophies: log.team[i].startingTrophies,
                  trophyChange: log.team[i].trophyChange,
                  crowns: log.team[i].crowns,

                  clan: {
                    tag: log.team[i].clan.tag,
                    name: log.team[i].clan.name,
                    badgeId: log.team[i].clan.badgeId
                  },

                  cards: [
                    {
                      name: log.team[i].cards[0].name,
                      id: log.team[i].cards[0].id,
                      level: log.team[i].cards[0].level,
                      maxLevel: log.team[i].cards[0].maxLevel,
                      iconUrls: {
                        medium: log.team[i].cards[0].iconUrls.medium
                      }
                    },
                    {
                      name: log.team[i].cards[1].name,
                      id: log.team[i].cards[1].id,
                      level: log.team[i].cards[1].level,
                      maxLevel: log.team[i].cards[1].maxLevel,
                      iconUrls: {
                        medium: log.team[i].cards[1].iconUrls.medium
                      }
                    },
                    {
                      name: log.team[i].cards[2].name,
                      id: log.team[i].cards[2].id,
                      level: log.team[i].cards[2].level,
                      maxLevel: log.team[i].cards[2].maxLevel,
                      iconUrls: {
                        medium: log.team[i].cards[2].iconUrls.medium
                      }
                    },
                    {
                      name: log.team[i].cards[3].name,
                      id: log.team[i].cards[3].id,
                      level: log.team[i].cards[3].level,
                      maxLevel: log.team[i].cards[3].maxLevel,
                      iconUrls: {
                        medium: log.team[i].cards[3].iconUrls.medium
                      }
                    },
                    {
                      name: log.team[i].cards[4].name,
                      id: log.team[i].cards[4].id,
                      level: log.team[i].cards[4].level,
                      maxLevel: log.team[i].cards[4].maxLevel,
                      iconUrls: {
                        medium: log.team[i].cards[4].iconUrls.medium
                      }
                    },
                    {
                      name: log.team[i].cards[5].name,
                      id: log.team[i].cards[5].id,
                      level: log.team[i].cards[5].level,
                      maxLevel: log.team[i].cards[5].maxLevel,
                      iconUrls: {
                        medium: log.team[i].cards[5].iconUrls.medium
                      }
                    },
                    {
                      name: log.team[i].cards[6].name,
                      id: log.team[i].cards[6].id,
                      level: log.team[i].cards[6].level,
                      maxLevel: log.team[i].cards[6].maxLevel,
                      iconUrls: {
                        medium: log.team[i].cards[6].iconUrls.medium
                      }
                    },
                    {
                      name: log.team[i].cards[7].name,
                      id: log.team[i].cards[7].id,
                      level: log.team[i].cards[7].level,
                      maxLevel: log.team[i].cards[7].maxLevel,
                      iconUrls: {
                        medium: log.team[i].cards[7].iconUrls.medium
                      }
                    }
                  ]
                }
              ],

              opponent: [
                {
                  tag: log.opponent[i].tag,
                  name: log.opponent[i].name,
                  startingTrophies: log.opponent[i].startingTrophies,
                  trophyChange: log.opponent[i].trophyChange,
                  crowns: log.opponent[i].crowns,

                  clan: {
                    tag: log.opponent[i].clan.tag,
                    name: log.opponent[i].clan.name,
                    badgeId: log.opponent[i].clan.badgeId
                  },

                  cards: [
                    {
                      name: log.opponent[i].cards[0].name,
                      id: log.opponent[i].cards[0].id,
                      level: log.opponent[i].cards[0].level,
                      maxLevel: log.opponent[i].cards[0].maxLevel,
                      iconUrls: {
                        medium: log.opponent[i].cards[0].iconUrls.medium
                      }
                    },
                    {
                      name: log.opponent[i].cards[1].name,
                      id: log.opponent[i].cards[1].id,
                      level: log.opponent[i].cards[1].level,
                      maxLevel: log.opponent[i].cards[1].maxLevel,
                      iconUrls: {
                        medium: log.opponent[i].cards[1].iconUrls.medium
                      }
                    },
                    {
                      name: log.opponent[i].cards[2].name,
                      id: log.opponent[i].cards[2].id,
                      level: log.opponent[i].cards[2].level,
                      maxLevel: log.opponent[i].cards[2].maxLevel,
                      iconUrls: {
                        medium: log.opponent[i].cards[2].iconUrls.medium
                      }
                    },
                    {
                      name: log.opponent[i].cards[3].name,
                      id: log.opponent[i].cards[3].id,
                      level: log.opponent[i].cards[3].level,
                      maxLevel: log.opponent[i].cards[3].maxLevel,
                      iconUrls: {
                        medium: log.opponent[i].cards[3].iconUrls.medium
                      }
                    },
                    {
                      name: log.opponent[i].cards[4].name,
                      id: log.opponent[i].cards[4].id,
                      level: log.opponent[i].cards[4].level,
                      maxLevel: log.opponent[i].cards[4].maxLevel,
                      iconUrls: {
                        medium: log.opponent[i].cards[4].iconUrls.medium
                      }
                    },
                    {
                      name: log.opponent[i].cards[5].name,
                      id: log.opponent[i].cards[5].id,
                      level: log.opponent[i].cards[5].level,
                      maxLevel: log.opponent[i].cards[5].maxLevel,
                      iconUrls: {
                        medium: log.opponent[i].cards[5].iconUrls.medium
                      }
                    },
                    {
                      name: log.opponent[i].cards[6].name,
                      id: log.opponent[i].cards[6].id,
                      level: log.opponent[i].cards[6].level,
                      maxLevel: log.opponent[i].cards[6].maxLevel,
                      iconUrls: {
                        medium: log.opponent[i].cards[6].iconUrls.medium
                      }
                    },
                    {
                      name: log.opponent[i].cards[7].name,
                      id: log.opponent[i].cards[7].id,
                      level: log.opponent[i].cards[7].level,
                      maxLevel: log.opponent[i].cards[7].maxLevel,
                      iconUrls: {
                        medium: log.opponent[i].cards[7].iconUrls.medium
                      }
                    }
                  ]
                }
              ]
            }).save(function(err) {
              if (err) console.error("2 - Save Failed(battlelog)", err);
            });
          }
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
