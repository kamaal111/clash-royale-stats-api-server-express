// modules
const { Router } = require('express');

const Chest = require('../../schemas/playertag/chest_schema');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Chest.find({ id }, (error, doc) => {
        if (error) return res.json({ succes: false, error });

        return res.json({ succes: true, doc });
    });
});

module.exports = router;
