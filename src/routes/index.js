"use strict";

// modules
const express = require("express"),
  router = express.Router();

const getChests = require("../requests/getChests").getChest,
  getBattlelog = require("../requests/getBattlelog").getBattlelog,
  getPlayerData = require("../requests/getPlayerData").getPlayerData;

// Update all player specific data
router.get("/", function(req, res, next) {
  getBattlelog();
  getChests();
  getPlayerData();
  next();
});

module.exports = router;
