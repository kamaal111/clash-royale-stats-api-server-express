const ClanWarlog = require("../../schemas/clantag/clanWarlog_schema");

module.exports = (clan, parsed) => {
  ClanWarlog.deleteOne({ id: clan }, function(err) {
    if (err) console.error(`1 - Save Failed(warlog) ${clan}`, err);
    console.log(`1 - Refreshing Database(warlog) ${clan}`);

    ClanWarlog({
      id: clan,

      items: parsed.items
    }).save(function(err) {
      if (err) console.error(`2 - Save Failed(warlog) ${clan}`, err);
    });
    console.log(`2 - Saved warlog ${clan}`);
  });
};
