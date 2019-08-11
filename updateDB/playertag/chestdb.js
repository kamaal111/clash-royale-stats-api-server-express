const Chest = require('../../schemas/playertag/chest_schema');

module.exports = (player, parsed) => {
    const condition = { id: player };
    const update = { id: player, items: parsed.items };
    const options = { upsert: true };

    Chest.findOneAndUpdate(condition, update, options, error => {
        if (error) {
            return console.error(`Save Failed(chest) ${player}`, error);
        }

        console.log(`Saved Chests ${player}`);
    });
};
