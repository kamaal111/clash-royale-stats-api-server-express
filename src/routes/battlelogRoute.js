"use strict";

// modules
const express = require("express"),
  router = express.Router();

const Battlelog = require("../schemas/battlelog_schema");

router.get("/", function(req, res, next) {
  Battlelog.find((err, doc) => {
    if (err) return res.json({ succes: false, error: err });
    return res.json({ succes: true, doc: doc });
  });
});

module.exports = router;
