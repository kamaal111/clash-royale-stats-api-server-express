const CHEST = require('../../schemas/playertag/chest_schema');

module.exports = (player, parsed) => {
  CHEST.deleteOne({ id: player }, err => {
    if (err) console.error(`1 - Save Failed(chest) ${player}`, err);
    console.log(`1 - Refreshing Database(chest) ${player}`);

    CHEST({
      id: player,
      items: parsed.items
    }).save(err => {
      if (err) console.error(`2 - Save Failed(chest) ${player}`, err);
    });

    console.log(`2 - Saved Chests ${player}`);
  });
};
