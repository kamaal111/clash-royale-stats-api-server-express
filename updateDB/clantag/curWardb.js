const ClanCurWar = require('../../schemas/clantag/clanCurWar_schema');

module.exports = async (clan, parsed) => {
  try {
    const condition = { id: clan };
    const update = {
      id: clan,
      state: parsed.state,
      collectionEndTime: parsed.collectionEndTime,
      clan: parsed.clan,
      participants: parsed.participants,
    };
    const options = { upsert: true };

    const entity = await ClanCurWar.findOneAndUpdate(condition, update, options);

    console.log(`Saved current war ${clan}`);

    return { currentWar: entity.toJSON() };
  } catch (error) {
    return console.error(`Save Failed(current war) ${clan}`, error);
  }
};
