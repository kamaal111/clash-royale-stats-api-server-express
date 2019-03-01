// modules
const express = require("express"),
  router = express.Router(),
  chalk = require("chalk");

const getPlayerData = require("../../requests/playertag/getPlayerData");

const requests = require("../../requests");

const chestdb = require("../../updateDB/playertag/chestdb"),
  battlelogdb = require("../../updateDB/playertag/battlelogdb");

router.param("player", function(req, res, next, id) {
  getPlayerData(id, response => {
    if (response === "OK") {
      requests(id, 1, chestdb);
      requests(id, 2, battlelogdb);
      console.log(chalk.yellowBright.bgBlack(response));
      res.json(response);
    } else {
      console.log(chalk.redBright.bgBlack(response));
      res.json(response);
    }
  });
});

router.get("/:player", function(req, res, next) {});

module.exports = router;
