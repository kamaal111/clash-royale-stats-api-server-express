// modules
const { Router } = require('express');

const Battlelog = require('../../schemas/playertag/battlelog_schema');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const condition = { id };

    Battlelog.findOne(condition, (error, doc) => {
        if (error) return res.json({ succes: false, error });

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
});

module.exports = router;
