const express = require("express"),
  router = express.Router();

const ClanInfo = require("../../schemas/clantag/clanInfo_schema");

router.param("clan", function(req, res, next, id) {
  ClanInfo.find({ id }, function(err, doc) {
    if (err) return res.json({ succes: false, error: err });
    return res.json({ succes: true, doc: doc });
  });
});

router.get("/:clan", function(req, res, next) {});

module.exports = router;
