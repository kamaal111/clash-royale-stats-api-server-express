const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const ClanInfo = require('../../schemas/clantag/clanInfo_schema');

ROUTER.get('/:id', (req, res, next) => {
  const { id } = req.params;

  ClanInfo.find({ id }, (error, doc) => {
    if (error) return res.json({ succes: false, error });
    return res.json({ succes: true, doc });
  });
});

module.exports = ROUTER;
