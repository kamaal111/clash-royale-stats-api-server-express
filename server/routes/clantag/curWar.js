const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const CurWar = require('../../schemas/clantag/clanCurWar_schema');

ROUTER.get('/:id', (req, res, next) => {
  const { id } = req.params;

  CurWar.find({ id }, (error, doc) => {
    if (error) return res.json({ succes: false, error });
    return res.json({ succes: true, doc });
  });
});

module.exports = ROUTER;
