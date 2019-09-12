const request = require('../lib/apiRequest');

const warlogDB = require('../updateDB/clantag/warlogdb');
const currentWarDB = require('../updateDB/clantag/curWardb');
const clanInfoDB = require('../updateDB/clantag/clanInfodb');

const clanWarlog = require('../schemas/clantag/clanWarlog_schema');
const CurWar = require('../schemas/clantag/clanCurWar_schema');
const ClanInfo = require('../schemas/clantag/clanInfo_schema');

const updateStats = (req, res) => {
  const {id} = req.params;

  Promise.all([
    request('updateClan', id, clanInfoDB),
    request('updateWarlog', id, warlogDB),
    request('updateCurrentWar', id, currentWarDB),
  ])
    .then(() => res.send({status: res.statusCode}))
    .catch(err => res.send({status: err.status}));
};

const findWarlog = (req, res) => {
  const {id} = req.params;

  const condition = {id};

  clanWarlog.findOne(condition, (error, doc) => {
    if (error) return res.json({succes: false, error});
    if (!doc) {
      return res.json({
        succes: false,
        error: {status: 404, message: 'Warlog not found'},
      });
    }

    const data = doc.items.reduce(
      (acc, log) => {
        const {clanScore, trophyChange, createdDate} = acc;

        const clansStanding = log[0].standings.find(standing => standing.clan.tag === `#${id}`);

        createdDate.push(log[0].createdDate);
        clanScore.push(clansStanding.clan.clanScore);
        trophyChange.push(clansStanding.trophyChange);

        return acc;
      },
      {clanScore: [], trophyChange: [], createdDate: []},
    );

    return res.json({succes: true, doc, data});
  });
};

const findCurrentWar = (req, res) => {
  const {id} = req.params;

  const condition = {id};

  CurWar.findOne(condition, (error, doc) => {
    if (error) return res.json({succes: false, error});
    if (!doc) {
      return res.json({
        succes: false,
        error: {status: 404, message: 'Current warlog not found'},
      });
    }

    return res.json({succes: true, doc});
  });
};

const findClanInfo = (req, res) => {
  const {id} = req.params;

  const condition = {id};

  ClanInfo.findOne(condition, (error, doc) => {
    if (error) return res.json({succes: false, error});
    if (!doc) {
      return res.json({
        succes: false,
        error: {status: 404, message: 'Clan stats not found'},
      });
    }

    return res.json({succes: true, doc});
  });
};

module.exports = {updateStats, findWarlog, findCurrentWar, findClanInfo};
