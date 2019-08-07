// modules
const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const Player = require('../../schemas/playertag/player_schema');

ROUTER.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Player.find({ id }, (error, doc) => {
    if (error) return res.json({ succes: false, error });
    return res.json({ succes: true, doc });
  });
});

module.exports = ROUTER;
