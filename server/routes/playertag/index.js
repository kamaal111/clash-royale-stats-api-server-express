// modules
const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router(),
  CHALK = require('chalk');

const REQUESTS = require('../../requests'),
  REQUESTS_CB = require('../../requests/reqcb');

const CHEST_DB = require('../../updateDB/playertag/chestdb'),
  BATTLELOG_DB = require('../../updateDB/playertag/battlelogdb'),
  PLAYER_DB = require('../../updateDB/playertag/playerdb');

ROUTER.param('player', (req, res, next, id) => {
  REQUESTS_CB(id, 0, PLAYER_DB, response => {
    if (response === 'OK') {
      REQUESTS(id, 1, CHEST_DB);
      REQUESTS(id, 2, BATTLELOG_DB);
      console.log(CHALK.yellowBright.bgBlack(response));
      res.json(response);
    } else {
      console.log(CHALK.redBright.bgBlack(response));
      res.json(response);
    }
  });
});

ROUTER.get('/:player', (req, res, next) => {});

module.exports = ROUTER;
