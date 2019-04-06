const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const clanWarlog = require('../../schemas/clantag/clanWarlog_schema');

const COLLECT_DATA = (logs, clanScore, trophyChange, createdDate, id) => {
  for (let i = 0; i < logs.length; i++) {
    let { standings } = logs[i][0];
    createdDate.push(logs[i][0].createdDate);
    for (let count = 0; count < standings.length; count++) {
      if (standings[count].clan.tag === `#${id}`) {
        clanScore.push(standings[count].clan.clanScore);
        trophyChange.push(standings[count].trophyChange);
        break;
      } else continue;
    }
  }
  return [{ clanScore, trophyChange, createdDate }];
};

ROUTER.param('clan', (req, res, next, id) => {
  clanWarlog.find({ id }, (error, doc) => {
    if (error) return res.json({ succes: false, error });
    else {
      if (doc[0]) {
        let clanScore = [],
          trophyChange = [],
          createdDate = [],
          logs = doc[0].items;

        let data = COLLECT_DATA(logs, clanScore, trophyChange, createdDate, id);
        return res.json({ succes: true, doc, data });
      } else return res.json({ succes: true, doc });
    }
  });
});

ROUTER.get('/:clan', (req, res, next) => {});

module.exports = ROUTER;
