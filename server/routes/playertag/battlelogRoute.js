// modules
const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const BATTLELOG = require('../../schemas/playertag/battlelog_schema');

ROUTER.param('player', (req, res, next, id) => {
  BATTLELOG.find({ id }, (err, doc) => {
    if (err) return res.json({ succes: false, error: err });
    return res.json({ succes: true, doc: doc });
  });
});

ROUTER.get('/:player', (req, res, next) => {});

module.exports = ROUTER;
