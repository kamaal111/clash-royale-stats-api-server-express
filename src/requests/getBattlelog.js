"use strict";

// modules
const https = require("https");

// options
const options = require("../lib");

const getBattlelog = (playertag, callback) => {
  let player = playertag;

  const req = https.request(options(2, player), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      const Battlelog = require("../schemas/battlelog_schema");

      const parsed = JSON.parse(body);

      const checkTeam = (tomato, cheese) => {
        if (parsed[count].team.length >= 2) {
          return parsed[count][tomato][0][cheese];
        } else return parsed[count][tomato][cheese];
      };

      const checkTeamMate = (tomato, cheese) => {
        if (parsed[count].team.length >= 2) {
          return parsed[count][tomato][1][cheese];
        } else return "";
      };

      const check = (tomato, cheese, burger) => {
        if (parsed[count][tomato][0][cheese])
          return parsed[count][tomato][0][cheese][burger];
        else return "";
      };

      const checkMate = (tomato, cheese, burger) => {
        if (parsed[count].team.length >= 2 && parsed[count][tomato][1][cheese])
          return parsed[count][tomato][1][cheese][burger];
        else return "";
      };

      const fresh = () => {
        if (parsed[count].team.length > 1)
          return parsed[count].team[1].cards.name;
        else return "";
      };

      let count = 0;

      Battlelog.deleteMany({ id: player }, err => {
        if (err) console.error(`1 - Save Failed(battlelog) ${player}`, err);
        console.log(`1 - Refreshing Database(battlelog) ${player}`);

        do {
          let log = parsed[count];

          Battlelog({
            id: player,
            type: log.type,
            battleTime: log.battleTime,

            arena: { id: log.arena.id, name: log.arena.name },

            gameMode: { id: log.gameMode.id, name: log.gameMode.name },

            deckSelection: log.deckSelection,

            team: [
              {
                tag: checkTeam("team", "tag"),
                tagTeam: checkTeamMate("team", "tag"),
                name: checkTeam("team", "name"),
                nameTeam: checkTeamMate("team", "name"),
                startingTrophies: log.team[0].startingTrophies,
                trophyChange: log.team[0].trophyChange,
                crowns: log.team[0].crowns,

                clan: {
                  tag: check("team", "clan", "tag"),
                  tagTeam: checkMate("team", "clan", "tag"),
                  name: check("team", "clan", "name"),
                  nameTeam: checkMate("team", "clan", "name"),
                  badgeId: check("team", "clan", "badgeId"),
                  badgeIdTeam: checkMate("team", "clan", "badgeId")
                },

                cards: {
                  cards: [
                    {
                      name: log.team[0].cards[0].name
                      // id: log.team[0].cards[0].id,
                      // level: log.team[0].cards[0].level,
                      // maxLevel: log.team[0].cards[0].maxLevel,
                      // iconUrls: {
                      //   medium: log.team[0].cards[0].iconUrls.medium
                      // }
                    },
                    {
                      name: log.team[0].cards[1].name
                      // id: log.team[0].cards[1].id,
                      // level: log.team[0].cards[1].level,
                      // maxLevel: log.team[0].cards[1].maxLevel,
                      // iconUrls: {
                      //   medium: log.team[0].cards[1].iconUrls.medium
                      // }
                    },
                    {
                      name: log.team[0].cards[2].name
                      // id: log.team[0].cards[2].id,
                      // level: log.team[0].cards[2].level,
                      // maxLevel: log.team[0].cards[2].maxLevel,
                      // iconUrls: {
                      //   medium: log.team[0].cards[2].iconUrls.medium
                      // }
                    },
                    {
                      name: log.team[0].cards[3].name
                      // id: log.team[0].cards[3].id,
                      // level: log.team[0].cards[3].level,
                      // maxLevel: log.team[0].cards[3].maxLevel,
                      // iconUrls: {
                      //   medium: log.team[0].cards[3].iconUrls.medium
                      // }
                    },
                    {
                      name: log.team[0].cards[4].name
                      // id: log.team[0].cards[4].id,
                      // level: log.team[0].cards[4].level,
                      // maxLevel: log.team[0].cards[4].maxLevel,
                      // iconUrls: {
                      //   medium: log.team[0].cards[4].iconUrls.medium
                      // }
                    },
                    {
                      name: log.team[0].cards[5].name
                      // id: log.team[0].cards[5].id,
                      // level: log.team[0].cards[5].level,
                      // maxLevel: log.team[0].cards[5].maxLevel,
                      // iconUrls: {
                      //   medium: log.team[0].cards[5].iconUrls.medium
                      // }
                    },
                    {
                      name: log.team[0].cards[6].name
                      // id: log.team[0].cards[6].id,
                      // level: log.team[0].cards[6].level,
                      // maxLevel: log.team[0].cards[6].maxLevel,
                      // iconUrls: {
                      //   medium: log.team[0].cards[6].iconUrls.medium
                      // }
                    },
                    {
                      name: log.team[0].cards[7].name
                      // id: log.team[0].cards[7].id,
                      // level: log.team[0].cards[7].level,
                      // maxLevel: log.team[0].cards[7].maxLevel,
                      // iconUrls: {
                      //   medium: log.team[0].cards[7].iconUrls.medium
                      // }
                    }
                  ],
                  cardsTeam: [
                    {
                      name: fresh()
                      //   // id: log.team[i].cards[0].id,
                      //   // level: log.team[i].cards[0].level,
                      //   // maxLevel: log.team[i].cards[0].maxLevel,
                      //   // iconUrls: {
                      //   //   medium: log.team[i].cards[0].iconUrls.medium
                      //   // }
                    },
                    {
                      //   name: log.team[1].cards[1].name
                      //   // id: log.team[i].cards[1].id,
                      //   // level: log.team[i].cards[1].level,
                      //   // maxLevel: log.team[i].cards[1].maxLevel,
                      //   // iconUrls: {
                      //   //   medium: log.team[i].cards[1].iconUrls.medium
                      //   // }
                    },
                    {
                      //   name: log.team[1].cards[2].name
                      //   // id: log.team[i].cards[2].id,
                      //   // level: log.team[i].cards[2].level,
                      //   // maxLevel: log.team[i].cards[2].maxLevel,
                      //   // iconUrls: {
                      //   //   medium: log.team[i].cards[2].iconUrls.medium
                      //   // }
                    },
                    {
                      //   name: log.team[1].cards[3].name
                      //   // id: log.team[i].cards[3].id,
                      //   // level: log.team[i].cards[3].level,
                      //   // maxLevel: log.team[i].cards[3].maxLevel,
                      //   // iconUrls: {
                      //   //   medium: log.team[i].cards[3].iconUrls.medium
                      //   // }
                    },
                    {
                      //   name: log.team[1].cards[4].name
                      //   // id: log.team[i].cards[4].id,
                      //   // level: log.team[i].cards[4].level,
                      //   // maxLevel: log.team[i].cards[4].maxLevel,
                      //   // iconUrls: {
                      //   //   medium: log.team[i].cards[4].iconUrls.medium
                      //   // }
                    },
                    {
                      //   name: log.team[1].cards[5].name
                      //   // id: log.team[i].cards[5].id,
                      //   // level: log.team[i].cards[5].level,
                      //   // maxLevel: log.team[i].cards[5].maxLevel,
                      //   // iconUrls: {
                      //   //   medium: log.team[i].cards[5].iconUrls.medium
                      //   // }
                    },
                    {
                      //   name: log.team[1].cards[6].name
                      //   // id: log.team[i].cards[6].id,
                      //   // level: log.team[i].cards[6].level,
                      //   // maxLevel: log.team[i].cards[6].maxLevel,
                      //   // iconUrls: {
                      //   //   medium: log.team[i].cards[6].iconUrls.medium
                      //   // }
                    },
                    {
                      //   name: log.team[1].cards[7].name
                      //   // id: log.team[i].cards[7].id,
                      //   // level: log.team[i].cards[7].level,
                      //   // maxLevel: log.team[i].cards[7].maxLevel,
                      //   // iconUrls: {
                      //   //   medium: log.team[i].cards[7].iconUrls.medium
                      //   // }
                    }
                  ]
                }
              }
            ],

            opponent: [
              {
                tag: checkTeam("opponent", "tag"),
                tagTeam: checkTeamMate("opponent", "tag"),
                name: checkTeam("opponent", "name"),
                nameTeam: checkTeamMate("opponent", "name"),
                startingTrophies: log.opponent[0].startingTrophies,
                trophyChange: log.opponent[0].trophyChange,
                crowns: log.opponent[0].crowns,

                clan: {
                  tag: check("opponent", "clan", "tag"),
                  tagTeam: checkMate("opponent", "clan", "tag"),
                  name: check("opponent", "clan", "name"),
                  nameTeam: checkMate("opponent", "clan", "name"),
                  badgeId: check("opponent", "clan", "badgeId"),
                  badgeIdTeam: checkMate("opponent", "clan", "badgeId")
                }

                // cards: [
                //   {
                //     name: log.opponent[i].cards[0].name,
                //     id: log.opponent[i].cards[0].id,
                //     level: log.opponent[i].cards[0].level,
                //     maxLevel: log.opponent[i].cards[0].maxLevel,
                //     iconUrls: {
                //       medium: log.opponent[i].cards[0].iconUrls.medium
                //     }
                //   },
                //   {
                //     name: log.opponent[i].cards[1].name,
                //     id: log.opponent[i].cards[1].id,
                //     level: log.opponent[i].cards[1].level,
                //     maxLevel: log.opponent[i].cards[1].maxLevel,
                //     iconUrls: {
                //       medium: log.opponent[i].cards[1].iconUrls.medium
                //     }
                //   },
                //   {
                //     name: log.opponent[i].cards[2].name,
                //     id: log.opponent[i].cards[2].id,
                //     level: log.opponent[i].cards[2].level,
                //     maxLevel: log.opponent[i].cards[2].maxLevel,
                //     iconUrls: {
                //       medium: log.opponent[i].cards[2].iconUrls.medium
                //     }
                //   },
                //   {
                //     name: log.opponent[i].cards[3].name,
                //     id: log.opponent[i].cards[3].id,
                //     level: log.opponent[i].cards[3].level,
                //     maxLevel: log.opponent[i].cards[3].maxLevel,
                //     iconUrls: {
                //       medium: log.opponent[i].cards[3].iconUrls.medium
                //     }
                //   },
                //   {
                //     name: log.opponent[i].cards[4].name,
                //     id: log.opponent[i].cards[4].id,
                //     level: log.opponent[i].cards[4].level,
                //     maxLevel: log.opponent[i].cards[4].maxLevel,
                //     iconUrls: {
                //       medium: log.opponent[i].cards[4].iconUrls.medium
                //     }
                //   },
                //   {
                //     name: log.opponent[i].cards[5].name,
                //     id: log.opponent[i].cards[5].id,
                //     level: log.opponent[i].cards[5].level,
                //     maxLevel: log.opponent[i].cards[5].maxLevel,
                //     iconUrls: {
                //       medium: log.opponent[i].cards[5].iconUrls.medium
                //     }
                //   },
                //   {
                //     name: log.opponent[i].cards[6].name,
                //     id: log.opponent[i].cards[6].id,
                //     level: log.opponent[i].cards[6].level,
                //     maxLevel: log.opponent[i].cards[6].maxLevel,
                //     iconUrls: {
                //       medium: log.opponent[i].cards[6].iconUrls.medium
                //     }
                //   },
                //   {
                //     name: log.opponent[i].cards[7].name,
                //     id: log.opponent[i].cards[7].id,
                //     level: log.opponent[i].cards[7].level,
                //     maxLevel: log.opponent[i].cards[7].maxLevel,
                //     iconUrls: {
                //       medium: log.opponent[i].cards[7].iconUrls.medium
                //     }
                // }
                //   ]
              }
            ]
          }).save(function(err) {
            if (err) console.error(`2 - Save Failed(battlelog) ${player}`, err);
          });

          count++;
        } while (count < parsed.length);

        console.log(`2 - Saved battlelog ${player}`);
      });
    });
  });

  req.end();
};

module.exports.getBattlelog = getBattlelog;
