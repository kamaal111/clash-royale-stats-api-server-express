"use strict";

// modules
const express = require("express"),
  router = express.Router();

const getChests = require("../requests/getChests").getChest,
  getBattlelog = require("../requests/getBattlelog").getBattlelog,
  getPlayerData = require("../requests/getPlayerData").getPlayerData;

const playertag = require("../data/playertag.json");

router.param("player", function(req, res, next, id) {
  getBattlelog(id);
  getChests(id);
  getPlayerData(id);
  res.end();
});

router.get("/:player", function(req, res, next) {
  next();
});

module.exports = router;
