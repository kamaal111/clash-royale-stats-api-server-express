const { Router } = require('express');

const request = require('../../lib');

const warlogDB = require('../../updateDB/clantag/warlogdb');
const currentWarDB = require('../../updateDB/clantag/curWardb');
const clanInfoDB = require('../../updateDB/clantag/clanInfodb');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Promise.all([
        request('updateClan', id, clanInfoDB),
        request('updateWarlog', id, warlogDB),
        request('updateCurrentWar', id, currentWarDB),
    ])
        .then(() => res.send({ status: res.statusCode }))
        .catch(err => res.send({ status: err.status }));
});

module.exports = router;
