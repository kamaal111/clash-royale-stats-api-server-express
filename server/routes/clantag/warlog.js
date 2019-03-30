const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const CLAN_WARLOG = require('../../schemas/clantag/clanWarlog_schema');

ROUTER.param('clan', (req, res, next, id) => {
  CLAN_WARLOG.find({ id }, (err, doc) => {
    if (err) return res.json({ succes: false, error: err });
    return res.json({ succes: true, doc: doc });
  });
});

ROUTER.get('/:clan', (req, res, next) => {});

module.exports = ROUTER;
