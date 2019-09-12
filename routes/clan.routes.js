const { Router } = require('express');

const {
  updateStats,
  findWarlog,
  findCurrentWar,
  findClanInfo,
} = require('../services/clan.services');

const router = new Router();

router.put('/:id', updateStats);

router.get('/warlog/:id', findWarlog);

router.get('/curwar/:id', findCurrentWar);

router.get('/data/:id', findClanInfo);

module.exports = router;
