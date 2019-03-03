const Battlelog = require("../../schemas/playertag/battlelog_schema");

module.exports = (player, parsed) => {
  let count = 0;

  if (parsed.length > 4) {
    Battlelog.deleteMany({ id: player }, err => {
      if (err) console.error(`1 - Save Failed(battlelog) ${player}`, err);
      console.log(`1 - Refreshing Database(battlelog) ${player}`);

      do {
        let log = parsed[count];

        Battlelog({
          id: player,
          type: log.type,
          battleTime: log.battleTime,

          arena: log.arena,

          gameMode: log.gameMode,

          deckSelection: log.deckSelection,

          team: log.team,

          opponent: log.opponent
        }).save(function(err) {
          if (err) console.error(`2 - Save Failed(battlelog) ${player}`, err);
        });

        count++;
      } while (count < parsed.length);

      console.log(`2 - Saved battlelog ${player}`);
    });
  } else return console.log("You have not played enough battles!!!");
};
