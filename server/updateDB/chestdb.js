const Chest = require("../schemas/chest_schema");

const chestdb = (player, parsed) => {
  let count = 0;

  Chest.deleteMany({ id: player }, err => {
    if (err) console.error(`1 - Save Failed(chest) ${player}`, err);
    console.log(`1 - Refreshing Database(chest) ${player}`);

    do {
      let item = parsed.items[count];
      Chest({
        id: player,
        name: item.name,
        order: item.index
      }).save(function(err) {
        if (err) console.error(`2 - Save Failed(chest) ${player}`, err);
      });
      count++;
    } while (count < parsed.items.length);
    console.log(`2 - Saved Chests ${player}`);
  });
};

module.exports = chestdb;
