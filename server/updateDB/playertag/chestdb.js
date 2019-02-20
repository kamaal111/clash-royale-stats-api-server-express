const Chest = require("../../schemas/playertag/chest_schema");

const chestdb = (player, parsed) => {
  Chest.deleteMany({ id: player }, err => {
    if (err) console.error(`1 - Save Failed(chest) ${player}`, err);
    console.log(`1 - Refreshing Database(chest) ${player}`);

    Chest({
      id: player,
      items: parsed.items
    }).save(function(err) {
      if (err) console.error(`2 - Save Failed(chest) ${player}`, err);
    });

    console.log(`2 - Saved Chests ${player}`);
  });
};

module.exports = chestdb;
