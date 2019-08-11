const Battlelog = require('../../schemas/playertag/battlelog_schema');

module.exports = (player, parsed) => {
    const condition = { id: player };
    const update = { id: player, battlelog: parsed };
    const options = { upsert: true };

    Battlelog.findOneAndUpdate(condition, update, options, error => {
        if (error) {
            return console.error(`Save Failed(battlelog) ${player}`, error);
        }

        console.log(`Saved battlelog ${player}`);
    });
};
