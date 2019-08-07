const EXPRESS = require('express'),
  CHALK = require('chalk'),
  ROUTER = EXPRESS.Router();

const REQUESTS = require('../../requests'),
  REQUESTS_CB = require('../../requests/reqcb');

const WARLOG_DB = require('../../updateDB/clantag/warlogdb'),
  CUR_WAR_DB = require('../../updateDB/clantag/curWardb'),
  CLAN_INFO_DB = require('../../updateDB/clantag/clanInfodb');

ROUTER.get('/:id', (req, res, next) => {
  const { id } = req.params;

  REQUESTS_CB((tag = id), (num = 4), (update = CLAN_INFO_DB), response => {
    if (response === 'OK') {
      REQUESTS((tag = id), (num = 5), (update = WARLOG_DB));
      REQUESTS((tag = id), (num = 6), (update = CUR_WAR_DB));
      console.log(CHALK.yellowBright.bgBlack(response));
      res.json(response);
    } else {
      console.log(CHALK.redBright.bgBlack(response));
      res.json(response);
    }
  });
});

module.exports = ROUTER;
