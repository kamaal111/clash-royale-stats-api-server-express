"use strict";

const Battlelog = require("../schemas/battlelog_schema");

const battlelogdb = (player, parsed) => {
  // Check for clan {tag, team and badgeid}
  const check = (team, prop, name) => {
    if (parsed[count][team][0][prop]) return parsed[count][team][0][prop][name];
    else return undefined;
  };

  // Check for clan {tag, team and badgeid} of teammate
  const checkMate = (team, prop, name) => {
    if (parsed[count].team.length >= 2 && parsed[count][team][1][prop])
      return parsed[count][team][1][prop][name];
    else return undefined;
  };

  // Check for tag, name of teammate
  const checkTeamMate = (team, name) => {
    if (parsed[count].team.length >= 2) return parsed[count][team][1][name];
    else return undefined;
  };

  // Check for cards of teammate
  const checkCards = (team, prop, name) => {
    if (parsed[count].team.length >= 2)
      return parsed[count][team][1].cards[prop][name];
    else return undefined;
  };

  // check for card images of teammate
  const checkCardsImg = (team, name) => {
    if (parsed[count].team.length >= 2)
      return parsed[count][team][1].cards[name].iconUrls.medium;
    else return undefined;
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
            tag: log.team[0].tag,
            tagTeam: checkTeamMate("team", "tag"),
            name: log.team[0].name,
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
                  name: log.team[0].cards[0].name,
                  id: log.team[0].cards[0].id,
                  level: log.team[0].cards[0].level,
                  maxLevel: log.team[0].cards[0].maxLevel,
                  iconUrls: {
                    medium: log.team[0].cards[0].iconUrls.medium
                  }
                },
                {
                  name: log.team[0].cards[1].name,
                  id: log.team[0].cards[1].id,
                  level: log.team[0].cards[1].level,
                  maxLevel: log.team[0].cards[1].maxLevel,
                  iconUrls: {
                    medium: log.team[0].cards[1].iconUrls.medium
                  }
                },
                {
                  name: log.team[0].cards[2].name,
                  id: log.team[0].cards[2].id,
                  level: log.team[0].cards[2].level,
                  maxLevel: log.team[0].cards[2].maxLevel,
                  iconUrls: {
                    medium: log.team[0].cards[2].iconUrls.medium
                  }
                },
                {
                  name: log.team[0].cards[3].name,
                  id: log.team[0].cards[3].id,
                  level: log.team[0].cards[3].level,
                  maxLevel: log.team[0].cards[3].maxLevel,
                  iconUrls: {
                    medium: log.team[0].cards[3].iconUrls.medium
                  }
                },
                {
                  name: log.team[0].cards[4].name,
                  id: log.team[0].cards[4].id,
                  level: log.team[0].cards[4].level,
                  maxLevel: log.team[0].cards[4].maxLevel,
                  iconUrls: {
                    medium: log.team[0].cards[4].iconUrls.medium
                  }
                },
                {
                  name: log.team[0].cards[5].name,
                  id: log.team[0].cards[5].id,
                  level: log.team[0].cards[5].level,
                  maxLevel: log.team[0].cards[5].maxLevel,
                  iconUrls: {
                    medium: log.team[0].cards[5].iconUrls.medium
                  }
                },
                {
                  name: log.team[0].cards[6].name,
                  id: log.team[0].cards[6].id,
                  level: log.team[0].cards[6].level,
                  maxLevel: log.team[0].cards[6].maxLevel,
                  iconUrls: {
                    medium: log.team[0].cards[6].iconUrls.medium
                  }
                },
                {
                  name: log.team[0].cards[7].name,
                  id: log.team[0].cards[7].id,
                  level: log.team[0].cards[7].level,
                  maxLevel: log.team[0].cards[7].maxLevel,
                  iconUrls: {
                    medium: log.team[0].cards[7].iconUrls.medium
                  }
                }
              ],
              cardsTeam: [
                {
                  name: checkCards("team", 0, "name"),
                  id: checkCards("team", 0, "id"),
                  level: checkCards("team", 0, "level"),
                  maxLevel: checkCards("team", 0, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("team", 0)
                  }
                },
                {
                  name: checkCards("team", 1, "name"),
                  id: checkCards("team", 1, "id"),
                  level: checkCards("team", 1, "level"),
                  maxLevel: checkCards("team", 1, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("team", 1)
                  }
                },
                {
                  name: checkCards("team", 2, "name"),
                  id: checkCards("team", 2, "id"),
                  level: checkCards("team", 2, "level"),
                  maxLevel: checkCards("team", 2, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("team", 2)
                  }
                },
                {
                  name: checkCards("team", 3, "name"),
                  id: checkCards("team", 3, "id"),
                  level: checkCards("team", 3, "level"),
                  maxLevel: checkCards("team", 3, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("team", 3)
                  }
                },
                {
                  name: checkCards("team", 4, "name"),
                  id: checkCards("team", 4, "id"),
                  level: checkCards("team", 4, "level"),
                  maxLevel: checkCards("team", 4, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("team", 4)
                  }
                },
                {
                  name: checkCards("team", 5, "name"),
                  id: checkCards("team", 5, "id"),
                  level: checkCards("team", 5, "level"),
                  maxLevel: checkCards("team", 5, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("team", 5)
                  }
                },
                {
                  name: checkCards("team", 6, "name"),
                  id: checkCards("team", 6, "id"),
                  level: checkCards("team", 6, "level"),
                  maxLevel: checkCards("team", 6, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("team", 6)
                  }
                },
                {
                  name: checkCards("team", 7, "name"),
                  id: checkCards("team", 7, "id"),
                  level: checkCards("team", 7, "level"),
                  maxLevel: checkCards("team", 7, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("team", 7)
                  }
                }
              ]
            }
          }
        ],

        opponent: [
          {
            tag: log.opponent[0].tag,
            tagTeam: checkTeamMate("opponent", "tag"),
            name: log.opponent[0].name,
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
            },

            cards: {
              cards: [
                {
                  name: log.opponent[0].cards[0].name,
                  id: log.opponent[0].cards[0].id,
                  level: log.opponent[0].cards[0].level,
                  maxLevel: log.opponent[0].cards[0].maxLevel,
                  iconUrls: {
                    medium: log.opponent[0].cards[0].iconUrls.medium
                  }
                },
                {
                  name: log.opponent[0].cards[1].name,
                  id: log.opponent[0].cards[1].id,
                  level: log.opponent[0].cards[1].level,
                  maxLevel: log.opponent[0].cards[1].maxLevel,
                  iconUrls: {
                    medium: log.opponent[0].cards[1].iconUrls.medium
                  }
                },
                {
                  name: log.opponent[0].cards[2].name,
                  id: log.opponent[0].cards[2].id,
                  level: log.opponent[0].cards[2].level,
                  maxLevel: log.opponent[0].cards[2].maxLevel,
                  iconUrls: {
                    medium: log.opponent[0].cards[2].iconUrls.medium
                  }
                },
                {
                  name: log.opponent[0].cards[3].name,
                  id: log.opponent[0].cards[3].id,
                  level: log.opponent[0].cards[3].level,
                  maxLevel: log.opponent[0].cards[3].maxLevel,
                  iconUrls: {
                    medium: log.opponent[0].cards[3].iconUrls.medium
                  }
                },
                {
                  name: log.opponent[0].cards[4].name,
                  id: log.opponent[0].cards[4].id,
                  level: log.opponent[0].cards[4].level,
                  maxLevel: log.opponent[0].cards[4].maxLevel,
                  iconUrls: {
                    medium: log.opponent[0].cards[4].iconUrls.medium
                  }
                },
                {
                  name: log.opponent[0].cards[5].name,
                  id: log.opponent[0].cards[5].id,
                  level: log.opponent[0].cards[5].level,
                  maxLevel: log.opponent[0].cards[5].maxLevel,
                  iconUrls: {
                    medium: log.opponent[0].cards[5].iconUrls.medium
                  }
                },
                {
                  name: log.opponent[0].cards[6].name,
                  id: log.opponent[0].cards[6].id,
                  level: log.opponent[0].cards[6].level,
                  maxLevel: log.opponent[0].cards[6].maxLevel,
                  iconUrls: {
                    medium: log.opponent[0].cards[6].iconUrls.medium
                  }
                },
                {
                  name: log.opponent[0].cards[7].name,
                  id: log.opponent[0].cards[7].id,
                  level: log.opponent[0].cards[7].level,
                  maxLevel: log.opponent[0].cards[7].maxLevel,
                  iconUrls: {
                    medium: log.opponent[0].cards[7].iconUrls.medium
                  }
                }
              ],
              cardsTeam: [
                {
                  name: checkCards("opponent", 0, "name"),
                  id: checkCards("opponent", 0, "id"),
                  level: checkCards("opponent", 0, "level"),
                  maxLevel: checkCards("opponent", 0, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("opponent", 0)
                  }
                },
                {
                  name: checkCards("opponent", 1, "name"),
                  id: checkCards("opponent", 1, "id"),
                  level: checkCards("opponent", 1, "level"),
                  maxLevel: checkCards("opponent", 1, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("opponent", 1)
                  }
                },
                {
                  name: checkCards("opponent", 2, "name"),
                  id: checkCards("opponent", 2, "id"),
                  level: checkCards("opponent", 2, "level"),
                  maxLevel: checkCards("opponent", 2, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("opponent", 2)
                  }
                },
                {
                  name: checkCards("opponent", 3, "name"),
                  id: checkCards("opponent", 3, "id"),
                  level: checkCards("opponent", 3, "level"),
                  maxLevel: checkCards("opponent", 3, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("opponent", 3)
                  }
                },
                {
                  name: checkCards("opponent", 4, "name"),
                  id: checkCards("opponent", 4, "id"),
                  level: checkCards("opponent", 4, "level"),
                  maxLevel: checkCards("opponent", 4, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("opponent", 4)
                  }
                },
                {
                  name: checkCards("opponent", 5, "name"),
                  id: checkCards("opponent", 5, "id"),
                  level: checkCards("opponent", 5, "level"),
                  maxLevel: checkCards("opponent", 5, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("opponent", 5)
                  }
                },
                {
                  name: checkCards("opponent", 6, "name"),
                  id: checkCards("opponent", 6, "id"),
                  level: checkCards("opponent", 6, "level"),
                  maxLevel: checkCards("opponent", 6, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("opponent", 6)
                  }
                },
                {
                  name: checkCards("opponent", 7, "name"),
                  id: checkCards("opponent", 7, "id"),
                  level: checkCards("opponent", 7, "level"),
                  maxLevel: checkCards("opponent", 7, "maxLevel"),
                  iconUrls: {
                    medium: checkCardsImg("opponent", 7)
                  }
                }
              ]
            }
          }
        ]
      }).save(function(err) {
        if (err) console.error(`2 - Save Failed(battlelog) ${player}`, err);
      });

      count++;
    } while (count < parsed.length);

    console.log(`2 - Saved battlelog ${player}`);
  });
};

module.exports = battlelogdb;
