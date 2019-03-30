const EXPRESS = require('express'),
  CHALK = require('chalk'),
  ROUTER = EXPRESS.Router();

const REQUESTS = require('../../requests'),
  REQUESTS_CB = require('../../requests/reqcb');

const WARLOG_DB = require('../../updateDB/clantag/warlogdb'),
  CUR_WAR_DB = require('../../updateDB/clantag/curWardb'),
  CLAN_INFO_DB = require('../../updateDB/clantag/clanInfodb');

ROUTER.param('clan', (req, res, next, id) => {
  REQUESTS_CB(id, 4, CLAN_INFO_DB, response => {
    if (response === 'OK') {
      REQUESTS(id, 5, WARLOG_DB);
      REQUESTS(id, 6, CUR_WAR_DB);
      console.log(CHALK.yellowBright.bgBlack(response));
      res.json(response);
    } else {
      console.log(CHALK.redBright.bgBlack(response));
      res.json(response);
    }
  });
});

ROUTER.get('/:clan', (req, res, next) => {});

module.exports = ROUTER;
