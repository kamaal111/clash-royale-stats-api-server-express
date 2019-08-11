const { Router } = require('express');

const { request } = require('../../lib');

const chestDB = require('../../updateDB/playertag/chestdb');
const battlelogDB = require('../../updateDB/playertag/battlelogdb');
const playerDB = require('../../updateDB/playertag/playerdb');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Promise.all([
        request('updatePlayer', id, playerDB),
        request('updateChest', id, chestDB),
        request('updateBattlelog', id, battlelogDB),
    ])
        .then(() => res.send({ status: res.statusCode }))
        .catch(err => res.send({ status: err.status }));
});

module.exports = router;
