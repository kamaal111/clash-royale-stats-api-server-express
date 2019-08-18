const { Router } = require('express');

const CurWar = require('../../schemas/clantag/clanCurWar_schema');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const condition = { id };

    CurWar.findOne(condition, (error, doc) => {
        if (error) return res.json({ succes: false, error });
        if (!doc) {
            return res.json({
                succes: false,
                error: { status: 404, message: 'Current warlog not found' },
            });
        }

        return res.json({ succes: true, doc });
    });
});

module.exports = router;
