const { Router } = require('express');

const {
    updateStats,
    findPlayerStats,
    findChestStats,
    findBattlelogStats,
} = require('../services/player.services');

const router = new Router();

router.put('/:id', updateStats);

router.get('/player/:id', findPlayerStats);

router.get('/chests/:id', findChestStats);

router.get('/battlelog/:id', findBattlelogStats);

module.exports = router;
