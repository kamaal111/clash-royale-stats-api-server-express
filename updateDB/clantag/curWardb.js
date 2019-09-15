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

    const findClanCurWar = await ClanCurWar.findOneAndUpdate(condition, update);

    if (!findClanCurWar) {
      const createClanCurWar = await ClanCurWar.create(update);
      console.log(`Saved current war ${clan}`);
      return { currentWar: createClanCurWar.toJSON() };
    }

    console.log(`Saved current war ${clan}`);
    return { currentWar: findClanCurWar.toJSON() };
  } catch (error) {
    return console.error(`Save Failed(current war) ${clan}`, error);
  }
};
