const Battlelog = require("../../schemas/playertag/battlelog_schema");

module.exports = (player, parsed) => {
  if (parsed.length > 4) {
    Battlelog.deleteMany({ id: player }, err => {
      if (err) console.error(`1 - Save Failed(battlelog) ${player}`, err);
      console.log(`1 - Refreshing Database(battlelog) ${player}`);

      Battlelog({
        id: player,
        battlelog: parsed
      }).save(function(err) {
        if (err) console.error(`2 - Save Failed(battlelog) ${player}`, err);
      });

      console.log(`2 - Saved battlelog ${player}`);
    });
  } else return console.log("You have not played enough battles!!!");
};
