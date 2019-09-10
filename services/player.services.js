const request = require('../lib/apiRequest');

const chestDB = require('../updateDB/playertag/chestdb');
const battlelogDB = require('../updateDB/playertag/battlelogdb');
const playerDB = require('../updateDB/playertag/playerdb');

const Player = require('../schemas/playertag/player_schema');
const Chest = require('../schemas/playertag/chest_schema');
const Battlelog = require('../schemas/playertag/battlelog_schema');

const updateStats = (req, res) => {
    const { id } = req.params;

    Promise.all([
        request('updatePlayer', id, playerDB),
        request('updateChest', id, chestDB),
        request('updateBattlelog', id, battlelogDB),
    ])
        .then(() => res.send({ status: res.statusCode }))
        .catch(err => res.send({ status: err.status }));
};

const findPlayerStats = (req, res) => {
    const { id } = req.params;

    const condition = { id };

    Player.findOne(condition, (error, doc) => {
        if (error) return res.json({ succes: false, error });
        if (!doc) {
            return res.json({
                succes: false,
                error: { status: 404, message: 'Player stats not found' },
            });
        }

        return res.json({ succes: true, doc });
    });
};

const findChestStats = (req, res) => {
    const { id } = req.params;

    const condition = { id };

    Chest.findOne(condition, (error, doc) => {
        if (error) return res.json({ succes: false, error });
        if (!doc) {
            return res.json({
                succes: false,
                error: { status: 404, message: 'Chest not found' },
            });
        }

        const chestImages = chest =>
            `https://royaleapi.github.io/cr-api-assets/chests/${chest}.png`;

        const { items } = doc;
        const modifiedDocs = items.map(item => {
            const chestName = item.name
                .split(' ')
                .reverse()
                .join('-')
                .toLowerCase();

            if (item.name === 'Golden Chest') {
                return {
                    ...item,
                    image: chestImages(chestName.replace('golden', 'gold')),
                };
            }

            if (item.name === 'Mega Lightning Chest') {
                return {
                    ...item,
                    image: chestImages(
                        chestName.replace('lightning-mega', 'megalightning')
                    ),
                };
            }

            return { ...item, image: chestImages(chestName) };
        });

        return res.json({ succes: true, doc: { items: modifiedDocs } });
    });
};

const findBattlelogStats = (req, res) => {
    const { id } = req.params;

    const condition = { id };

    Battlelog.findOne(condition, (error, doc) => {
        if (error) return res.json({ succes: false, error });
        if (!doc) {
            return res.json({
                succes: false,
                error: { status: 404, message: 'Battlelog not found' },
            });
        }

        const data = doc.battlelog.reduce(
            (acc, log) => {
                const { startingTrophies, trophyChange, battleTime } = acc;

                if (log.team[0].trophyChange !== undefined) {
                    startingTrophies.push(log.team[0].startingTrophies);
                    trophyChange.push(log.team[0].trophyChange);
                    battleTime.push(log.battleTime);
                }

                return acc;
            },
            { startingTrophies: [], trophyChange: [], battleTime: [] }
        );

        return res.json({ succes: true, doc, data });
    });
};

module.exports = {
    updateStats,
    findPlayerStats,
    findChestStats,
    findBattlelogStats,
};
