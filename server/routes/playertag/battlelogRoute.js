// modules
const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const BATTLELOG = require('../../schemas/playertag/battlelog_schema');

ROUTER.param('player', (req, res, next, id) => {
  BATTLELOG.find({ id }, (error, doc) => {
    if (error) return res.json({ succes: false, error });
    else {
      if (doc[0]) {
        let startingTrophies = [],
          trophyChange = [],
          battleTime = [],
          logs = doc[0].battlelog;
        for (let i = 0; i < logs.length; i++) {
          let st = logs[i].team[0].startingTrophies,
            tc = logs[i].team[0].trophyChange,
            bt = logs[i].battleTime;
          startingTrophies.push(st);
          trophyChange.push(tc);
          battleTime.push(bt);
        }
        let data = [{ startingTrophies, trophyChange, battleTime }];

        return res.json({ succes: true, doc, data });
      } else return res.json({ succes: true, doc });
    }
  });
});

ROUTER.get('/:player', (req, res, next) => {});

module.exports = ROUTER;
