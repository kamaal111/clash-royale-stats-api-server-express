const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const ClanInfo = require('../../schemas/clantag/clanInfo_schema');

ROUTER.param('clan', (req, res, next, id) => {
  ClanInfo.find({ id }, (err, doc) => {
    if (err) return res.json({ succes: false, error: err });
    return res.json({ succes: true, doc: doc });
  });
});

ROUTER.get('/:clan', (req, res, next) => {});

module.exports = ROUTER;
