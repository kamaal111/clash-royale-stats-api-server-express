const { Router } = require('express');

const clanWarlog = require('../../schemas/clantag/clanWarlog_schema');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const condition = { id };

    clanWarlog.findOne(condition, (error, doc) => {
        if (error) return res.json({ succes: false, error });

        const data = doc.items.reduce(
            (acc, log) => {
                const { clanScore, trophyChange, createdDate } = acc;

                const clansStanding = log[0].standings.find(
                    standing => standing.clan.tag === `#${id}`
                );

                createdDate.push(log[0].createdDate);
                clanScore.push(clansStanding.clan.clanScore);
                trophyChange.push(clansStanding.trophyChange);

                return acc;
            },
            { clanScore: [], trophyChange: [], createdDate: [] }
        );

        return res.json({ succes: true, doc, data });
    });
});

module.exports = router;
