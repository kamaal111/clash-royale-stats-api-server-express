const ClanWarlog = require('../../schemas/clantag/clanWarlog_schema');

module.exports = async (clan, parsed) => {
  try {
    const data = parsed.items.reduce(
      (acc, logs) => {
        const { clanScore, trophyChange, createdDate } = acc;

        const clansStanding = logs.standings.find(
          standing => standing.clan.tag === `#${clan}`,
        );

        return {
          createdDate: [...createdDate, logs.createdDate],
          clanScore: [...clanScore, clansStanding.clan.clanScore],
          trophyChange: [...trophyChange, clansStanding.trophyChange],
        };
      },
      { clanScore: [], trophyChange: [], createdDate: [] },
    );

    const condition = { id: clan };
    const update = { id: clan, clanWarlog: { logs: parsed.items, data } };

    await ClanWarlog.findOneAndDelete(condition);

    const createClanWarlog = await ClanWarlog.create(update);
    console.log(`Saved warlog ${clan}`);
    return { clanWarlog: createClanWarlog.toJSON() };
  } catch (error) {
    return console.error(`Save Failed(warlog) ${clan}`, error);
  }
};
