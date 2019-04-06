const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const ClanInfo = require('../../schemas/clantag/clanInfo_schema');

ROUTER.param('clan', (req, res, next, id) => {
  ClanInfo.find({ id }, (error, doc) => {
    if (error) return res.json({ succes: false, error });
    return res.json({ succes: true, doc });
  });
});

ROUTER.get('/:clan', (req, res, next) => {});

module.exports = ROUTER;
