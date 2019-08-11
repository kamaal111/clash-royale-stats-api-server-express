const ClanCurWar = require('../../schemas/clantag/clanCurWar_schema');

module.exports = (clan, parsed) => {
    const condition = { id: clan };
    const update = {
        id: clan,
        state: parsed.state,
        collectionEndTime: parsed.collectionEndTime,
        clan: parsed.clan,
        participants: parsed.participants,
    };
    const options = { upsert: true };

    ClanCurWar.findOneAndUpdate(condition, update, options, error => {
        if (error) {
            return console.error(`Save Failed(current war) ${clan}`, error);
        }

        console.log(`Saved current war ${clan}`);
    });
};
