// modules
const { Router } = require('express');

const Battlelog = require('../../schemas/playertag/battlelog_schema');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Battlelog.find({ id }, (error, doc) => {
        if (error) return res.json({ succes: false, error });

        if (doc[0]) {
            const logs = doc[0].battlelog;

            const data = logs.reduce(
                (acc, log) => {
                    const [startingTrophies, trophyChange, battleTime] = acc;

                    startingTrophies.push(log.team[0].startingTrophies);
                    trophyChange.push(log.team[0].trophyChange);
                    battleTime.push(log.battleTime);

                    return acc;
                },
                [[], [], []]
            );

            return res.json({ succes: true, doc, data });
        }

        return res.json({ succes: true, doc });
    });
});

module.exports = router;
