// modules
const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const Player = require('../../schemas/playertag/player_schema');

ROUTER.param('player', (req, res, next, id) => {
  Player.find({ id }, (error, doc) => {
    if (error) return res.json({ succes: false, error });
    return res.json({ succes: true, doc });
  });
});

ROUTER.get('/:player', (req, res, next) => {});

module.exports = ROUTER;
