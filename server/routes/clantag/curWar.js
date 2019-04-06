const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const CurWar = require('../../schemas/clantag/clanCurWar_schema');

ROUTER.param('clan', (req, res, next, id) => {
  CurWar.find({ id }, (error, doc) => {
    if (error) return res.json({ succes: false, error });
    return res.json({ succes: true, doc });
  });
});

ROUTER.get('/:clan', (req, res, next) => {});

module.exports = ROUTER;
