"use strict";

// modules
const https = require("https");

// options
const options = require("../lib");

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

              // deckSelection: log.deckSelection,

              team: [
                {
                  tag: log.team[i].tag,
                  name: log.team[i].name,
                  startingTrophies: log.team[i].startingTrophies,
                  trophyChange: log.team[i].trophyChange,
                  crowns: log.team[i].crowns,

                  // clan: {
                  //   tag: log.team[i].clan.tag,
                  //   name: log.team[i].clan.name,
                  //   badgeId: log.team[i].clan.badgeId
                  // },

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

                  // clan: {
                  //   tag: log.opponent[i].clan.tag,
                  //   name: log.opponent[i].clan.name,
                  //   badgeId: log.opponent[i].clan.badgeId
                  // },

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

module.exports.getBattlelog = getBattlelog;
