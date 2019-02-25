const express = require("express"),
  router = express.Router();

const CurWar = require("../../schemas/clantag/clanCurWar_schema");

router.param("clan", function(req, res, next, id) {
  CurWar.find({ id }, function(err, doc) {
    if (err) return res.json({ succes: false, error: err });
    return res.json({ succes: true, doc: doc });
  });
});

router.get("/:clan", function(req, res, next) {});

module.exports = router;
