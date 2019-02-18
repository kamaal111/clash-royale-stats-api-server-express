const express = require("express"),
  router = express.Router();

const Clan = require("../../schemas/clantag/clan_schema");

router.param("clan", function(req, res, next, id) {
  Clan.find({ id }, function(err, doc) {
    if (err) return res.json({ succes: false, error: err });
    return res.json({ succes: true, doc: doc });
  });
});

router.get("/:clan", function(req, res, next) {});

module.exports = router;
