"use strict";

// modules
const express = require("express"),
  router = express.Router(),
  chalk = require("chalk");

const getChests = require("../requests/getChests"),
  getBattlelog = require("../requests/getBattlelog"),
  getPlayerData = require("../requests/getPlayerData");

router.param("player", function(req, res, next, id) {
  getPlayerData(id, response => {
    if (response === "OK") {
      console.log(chalk.yellowBright.bgBlack(response));
      getBattlelog(id);
      getChests(id);
      res.json(response);
    } else {
      console.log(chalk.redBright.bgBlack(response));
      res.json(response);
    }
  });
  // res.json("YES");
});

router.get("/:player", function(req, res, next) {});

module.exports = router;
