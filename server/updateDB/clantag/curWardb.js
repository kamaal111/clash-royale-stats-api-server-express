const ClanCurWar = require('../../schemas/clantag/clanCurWar_schema');

module.exports = (clan, parsed) => {
  ClanCurWar.deleteOne({ id: clan }, err => {
    if (err) console.error(`1 - Save Failed(current war) ${clan}`, err);
    console.log(`1 - Refreshing Database(current war) ${clan}`);

    ClanCurWar({
      id: clan,

      state: parsed.state,
      collectionEndTime: parsed.collectionEndTime,

      clan: parsed.clan,

      participants: parsed.participants
    }).save(err => {
      if (err) console.error(`2 - Save Failed(current war) ${clan}`, err);
    });
    console.log(`2 - Saved current war ${clan}`);
  });
};
