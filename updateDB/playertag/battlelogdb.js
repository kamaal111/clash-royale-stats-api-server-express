const Battlelog = require('../../schemas/playertag/battlelog_schema');

module.exports = async (player, parsed) => {
  try {
    const data = parsed.reduce(
      (acc, log) => {
        const { startingTrophies, trophyChange, battleTime } = acc;

        if (log.team[0].trophyChange === undefined) return acc;

        return {
          startingTrophies: [...startingTrophies, log.team[0].startingTrophies],
          trophyChange: [...trophyChange, log.team[0].trophyChange],
          battleTime: [...battleTime, log.battleTime],
        };
      },
      { startingTrophies: [], trophyChange: [], battleTime: [] },
    );

    const modifiedParsedData = parsed.map(log => {
      const team = log.team.map(player => {
        if (typeof player.clan === 'undefined') return player;
        return {
          ...player,
          clan: {
            ...player.clan,
            badgeUrl: `https://cdn.statsroyale.com/images/badges/${player.clan.badgeId}.png`,
          },
        };
      });

      const opponent = log.opponent.map(player => {
        if (typeof player.clan === 'undefined') return player;
        return {
          ...player,
          clan: {
            ...player.clan,
            badgeUrl: `https://cdn.statsroyale.com/images/badges/${player.clan.badgeId}.png`,
          },
        };
      });

      return { ...log, team, opponent };
    });

    const condition = { id: player };
    const update = {
      id: player,
      battlelog: { logs: modifiedParsedData, data },
    };

    const findBattlelog = await Battlelog.findOneAndUpdate(condition, update);

    if (!findBattlelog) {
      const createBattlelog = await Battlelog.create(update);
      console.log(`Saved battlelog ${player}`);
      return { battlelog: createBattlelog.toJSON() };
    }

    console.log(`Saved battlelog ${player}`);
    return { battlelog: findBattlelog.toJSON() };
  } catch (error) {
    return console.error(`Save Failed(battlelog) ${player}`, error);
  }
};
