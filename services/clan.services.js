const request = require('../lib/apiRequest');

const warlogDB = require('../updateDB/clantag/warlogdb');
const currentWarDB = require('../updateDB/clantag/curWardb');
const clanInfoDB = require('../updateDB/clantag/clanInfodb');

const clanWarlog = require('../schemas/clantag/clanWarlog_schema');
const CurWar = require('../schemas/clantag/clanCurWar_schema');
const ClanInfo = require('../schemas/clantag/clanInfo_schema');

const updateStats = (req, res) => {
  const { id } = req.params;

  Promise.all([
    request('updateClan', id, clanInfoDB),
    request('updateWarlog', id, warlogDB),
    request('updateCurrentWar', id, currentWarDB),
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

const findWarlog = async (req, res) => {
  try {
    const { id } = req.params;

    const condition = { id };

    const foundClanWarlog = await clanWarlog.findOne(condition);

    if (!foundClanWarlog) {
      return res.json({
        succes: false,
        status: 404,
        error: { message: 'Warlog not found' },
      });
    }

    return res.json({ succes: true, status: 200, doc: foundClanWarlog });
  } catch (error) {
    return res.json({ succes: false, status: error.status, error });
  }
};

const findCurrentWar = async (req, res) => {
  try {
    const { id } = req.params;
    const condition = { id };

    const foundCurrentWar = await CurWar.findOne(condition);

    if (!foundCurrentWar) {
      return res.json({
        succes: false,
        status: 404,
        error: { message: 'Current warlog not found' },
      });
    }

    return res.json({ succes: true, status: 200, doc: foundCurrentWar });
  } catch (error) {
    return res.json({ succes: false, status: error.status, error });
  }
};

const findClanInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const condition = { id };

    const foundClanInfo = await ClanInfo.findOne(condition);

    if (!foundClanInfo) {
      return res.json({
        succes: false,
        status: 404,
        error: { message: 'Clan stats not found' },
      });
    }

    return res.json({ succes: true, status: 200, doc: foundClanInfo });
  } catch (error) {
    return res.json({ succes: false, status: error.status, error });
  }
};

module.exports = {
  updateStats,
  findWarlog,
  findCurrentWar,
  findClanInfo,
};
