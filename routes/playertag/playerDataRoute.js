// modules
const { Router } = require('express');

const Player = require('../../schemas/playertag/player_schema');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Player.find({ id }, (error, doc) => {
        if (error) return res.json({ succes: false, error });

        return res.json({ succes: true, doc });
    });
});

module.exports = router;
