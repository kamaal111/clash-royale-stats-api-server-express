const EXPRESS = require('express'),
  ROUTER = EXPRESS.Router();

const CLAN_WARLOG = require('../../schemas/clantag/clanWarlog_schema');

ROUTER.param('clan', (req, res, next, id) => {
  CLAN_WARLOG.find({ id }, (err, doc) => {
    if (err) return res.json({ succes: false, error: err });
    else {
      if (doc[0]) {
        let clanScore = [],
          trophyChange = [],
          createdDate = [],
          logs = doc[0].items;

        const COLLECT_DATA = () => {
          for (let i = 0; i < logs.length; i++) {
            let standings = logs[i][0].standings;
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
        let data = COLLECT_DATA();
        return res.json({ succes: true, doc, data });
      } else return res.json({ succes: true, doc: doc });
    }
  });
});

ROUTER.get('/:clan', (req, res, next) => {});

module.exports = ROUTER;
