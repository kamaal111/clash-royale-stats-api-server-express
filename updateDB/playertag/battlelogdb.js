const Battlelog = require('../../schemas/playertag/battlelog_schema');

module.exports = async (player, parsed) => {
  try {
    const data = parsed.reduce(
      (acc, log) => {
        const {startingTrophies, trophyChange, battleTime} = acc;

        if (log.team[0].trophyChange !== undefined) {
          startingTrophies.push(log.team[0].startingTrophies);
          trophyChange.push(log.team[0].trophyChange);
          battleTime.push(log.battleTime);
        }

        return acc;
      },
      {startingTrophies: [], trophyChange: [], battleTime: []},
    );

    const condition = {id: player};
    const update = {id: player, battlelog: {logs: parsed, data}};
    const options = {upsert: true};

    const entity = await Battlelog.findOneAndUpdate(condition, update, options);

    console.log(`Saved battlelog ${player}`);

    return {battlelog: entity.toJSON()};
  } catch (error) {
    return console.error(`Save Failed(battlelog) ${player}`, error);
  }
};
