"use strict";

// modules
const express = require("express"),
  router = express.Router();

const getChests = require("../requests/getChests").getChest,
  getBattlelog = require("../requests/getBattlelog").getBattlelog,
  getPlayerData = require("../requests/getPlayerData").getPlayerData;

router.param("player", function(req, res, next, id) {});

router.get("/hello", function(req, res, next) {
  getBattlelog("#998LLUR0R");
  getChests("#998LLUR0R");
  getPlayerData("#998LLUR0R");
});

module.exports = router;
