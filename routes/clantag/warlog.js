const { Router } = require('express');

const clanWarlog = require('../../schemas/clantag/clanWarlog_schema');

const router = new Router();

const COLLECT_DATA = (logs, clanScore, trophyChange, createdDate, id) => {
    for (let i = 0; i < logs.length; i++) {
        let { standings } = logs[i][0];
        createdDate.push(logs[i][0].createdDate);
        for (let count = 0; count < standings.length; count++) {
            if (standings[count].clan.tag === `#${id}`) {
                clanScore.push(standings[count].clan.clanScore);
                trophyChange.push(standings[count].trophyChange);
                break;
            } else continue;
        }
    }
    return [clanScore, trophyChange, createdDate];
};

router.get('/:id', (req, res) => {
    const { id } = req.params;

    clanWarlog.find({ id }, (error, doc) => {
        if (error) return res.json({ succes: false, error });

        if (doc[0]) {
            let clanScore = [],
                trophyChange = [],
                createdDate = [];

            const logs = doc[0].items;

            let data = COLLECT_DATA(
                logs,
                clanScore,
                trophyChange,
                createdDate,
                id
            );

            return res.json({ succes: true, doc, data });
        }

        return res.json({ succes: true, doc });
    });
});

module.exports = router;
