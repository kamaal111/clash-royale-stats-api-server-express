const { Router } = require('express');

const CurWar = require('../../schemas/clantag/clanCurWar_schema');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    CurWar.find({ id }, (error, doc) => {
        if (error) return res.json({ succes: false, error });

        return res.json({ succes: true, doc });
    });
});

module.exports = router;
