const request = require('../lib/apiRequest');

const chestDB = require('../updateDB/playertag/chestdb');
const battlelogDB = require('../updateDB/playertag/battlelogdb');
const playerDB = require('../updateDB/playertag/playerdb');

const Player = require('../schemas/playertag/player_schema');
const Chest = require('../schemas/playertag/chest_schema');
const Battlelog = require('../schemas/playertag/battlelog_schema');

const updateStats = (req, res) => {
  const { id } = req.params;

  Promise.all([
    request('updatePlayer', id, playerDB),
    request('updateChest', id, chestDB),
    request('updateBattlelog', id, battlelogDB),
  ])
    .then(docs => {
      if (res.statusCode !== 200) {
        res.send({ succes: false, status: res.statusCode });
      }

      if (docs.length < 3) {
        res.send({ succes: false, status: 500 });
      }

      return res.send({ succes: true, status: res.statusCode, docs });
    })
    .catch(error => res.send({ succes: false, status: error.status, error }));
};

const findPlayerStats = async (req, res) => {
  try {
    const { id } = req.params;
    const condition = { id };

    const foundPlayer = await Player.findOne(condition);

    if (!foundPlayer) {
      return res.json({
        succes: false,
        status: 404,
        error: { message: 'Player stats not found' },
      });
    }

    return res.json({ succes: true, status: 200, doc: foundPlayer });
  } catch (error) {
    return res.json({ succes: false, status: error.status, error });
  }
};

const findChestStats = async (req, res) => {
  try {
    const { id } = req.params;
    const condition = { id };

    const foundChest = await Chest.findOne(condition);

    if (!foundChest) {
      return res.json({
        succes: false,
        status: 404,
        error: { message: 'Chest not found' },
      });
    }

    return res.json({ succes: true, status: 200, doc: foundChest });
  } catch (error) {
    return res.json({ succes: false, status: error.status, error });
  }
};

const findBattlelogStats = async (req, res) => {
  try {
    const { id } = req.params;
    const condition = { id };

    const foundBattlelog = await Battlelog.findOne(condition);

    if (!foundBattlelog) {
      return res.json({
        succes: false,
        status: 404,
        error: { message: 'Battlelog not found' },
      });
    }

    return res.json({ succes: true, status: 200, doc: foundBattlelog });
  } catch (error) {
    return res.json({ succes: false, status: error.status, error });
  }
};

module.exports = {
  updateStats,
  findPlayerStats,
  findChestStats,
  findBattlelogStats,
};
