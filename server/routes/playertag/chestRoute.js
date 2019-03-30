// modules
const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const CHEST = require('../../schemas/playertag/chest_schema');

ROUTER.param('player', (req, res, next, id) => {
  CHEST.find({ id }, (err, doc) => {
    if (err) return res.json({ succes: false, error: err });
    return res.json({ succes: true, doc: doc });
  });
});

ROUTER.get('/:player', (req, res, next) => {});

module.exports = ROUTER;
