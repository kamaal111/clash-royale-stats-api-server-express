const { Router } = require('express');

const ClanInfo = require('../../schemas/clantag/clanInfo_schema');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const condition = { id };

    ClanInfo.findOne(condition, (error, doc) => {
        if (error) return res.json({ succes: false, error });
        if (!doc) {
            return res.json({
                succes: false,
                error: { status: 404, message: 'Clan stats not found' },
            });
        }

        return res.json({ succes: true, doc });
    });
});

module.exports = router;
