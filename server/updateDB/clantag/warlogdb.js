const CLAN_WARLOG = require('../../schemas/clantag/clanWarlog_schema');

module.exports = (clan, parsed) => {
  CLAN_WARLOG.deleteOne({ id: clan }, err => {
    if (err) console.error(`1 - Save Failed(warlog) ${clan}`, err);
    console.log(`1 - Refreshing Database(warlog) ${clan}`);

    CLAN_WARLOG({
      id: clan,

      items: parsed.items
    }).save(err => {
      if (err) console.error(`2 - Save Failed(warlog) ${clan}`, err);
    });
    console.log(`2 - Saved warlog ${clan}`);
  });
};
