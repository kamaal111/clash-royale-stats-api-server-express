// modules
const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const Chest = require('../../schemas/playertag/chest_schema');

ROUTER.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Chest.find({ id }, (error, doc) => {
    if (error) return res.json({ succes: false, error });
    return res.json({ succes: true, doc });
  });
});

module.exports = ROUTER;
