const Battlelog = require('../../schemas/playertag/battlelog_schema');

module.exports = (player, parsed) => {
  Battlelog.deleteOne({ id: player }, err => {
    if (err) console.error(`1 - Save Failed(battlelog) ${player}`, err);
    console.log(`1 - Refreshing Database(battlelog) ${player}`);

    Battlelog({
      id: player,
      battlelog: parsed
    }).save(err => {
      if (err) console.error(`2 - Save Failed(battlelog) ${player}`, err);
    });

    console.log(`2 - Saved battlelog ${player}`);
  });
};
