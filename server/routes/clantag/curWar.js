const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const CUR_WAR = require('../../schemas/clantag/clanCurWar_schema');

ROUTER.param('clan', (req, res, next, id) => {
  CUR_WAR.find({ id }, (err, doc) => {
    if (err) return res.json({ succes: false, error: err });
    return res.json({ succes: true, doc: doc });
  });
});

ROUTER.get('/:clan', (req, res, next) => {});

module.exports = ROUTER;
