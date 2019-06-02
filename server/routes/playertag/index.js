const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const CHALK = require('chalk');

const REQUESTS = require('../../requests'),
  REQUESTS_CB = require('../../requests/reqcb');

const CHEST_DB = require('../../updateDB/playertag/chestdb'),
  BATTLELOG_DB = require('../../updateDB/playertag/battlelogdb'),
  PLAYER_DB = require('../../updateDB/playertag/playerdb');

ROUTER.get('/:player', (req, res, next) => {
  const { player } = req.params;

  REQUESTS_CB((tag = player), (num = 0), (update = PLAYER_DB), response => {
    if (response === 'OK') {
      REQUESTS((tag = player), (num = 1), (update = CHEST_DB));
      REQUESTS((tag = player), (num = 2), (update = BATTLELOG_DB));
      console.log(CHALK.yellowBright.bgBlack(response));
      res.json(response);
    } else {
      console.log(CHALK.redBright.bgBlack(response));
      res.json(response);
    }
  });
});

module.exports = ROUTER;
