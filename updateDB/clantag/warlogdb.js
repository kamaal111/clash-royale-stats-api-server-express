const ClanWarlog = require('../../schemas/clantag/clanWarlog_schema');

module.exports = async (clan, parsed) => {
  try {
    const data = parsed.items.reduce(
      (acc, logs) => {
        const { clanScore, trophyChange, createdDate } = acc;
        const [log] = logs;

        const clansStanding = log.standings.find(standing => standing.clan.tag === `#${clan}`);

        return {
          createdDate: [...createdDate, log.createdDate],
          clanScore: [...clanScore, clansStanding.clan.clanScore],
          trophyChange: [...trophyChange, clansStanding.trophyChange],
        };
      },
      { clanScore: [], trophyChange: [], createdDate: [] },
    );

    const condition = { id: clan };
    const update = { id: clan, clanWarlog: { logs: parsed.items, data } };
    const options = { upsert: true };

    const entity = await ClanWarlog.findOneAndUpdate(condition, update, options);

    console.log(`Saved warlog ${clan}`);

    return { clanWarlog: entity.toJSON() };
  } catch (error) {
    return console.error(`Save Failed(warlog) ${clan}`, error);
  }
};
