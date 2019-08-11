const ClanWarlog = require('../../schemas/clantag/clanWarlog_schema');

module.exports = (clan, parsed) => {
    const condition = { id: clan };
    const update = { id: clan, items: parsed.items };
    const options = { upsert: true };

    ClanWarlog.findOneAndUpdate(condition, update, options, error => {
        if (error) {
            return console.error(`Save Failed(warlog) ${clan}`, error);
        }

        console.log(`Saved warlog ${clan}`);
    });
};
