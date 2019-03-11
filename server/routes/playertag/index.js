// modules
const express = require("express"),
  router = express.Router(),
  chalk = require("chalk");

const requests = require("../../requests"),
  requestscb = require("../../requests/reqcb");

const chestdb = require("../../updateDB/playertag/chestdb"),
  battlelogdb = require("../../updateDB/playertag/battlelogdb"),
  playerdb = require("../../updateDB/playertag/playerdb");

router.param("player", function(req, res, next, id) {
  requestscb(id, 0, playerdb, response => {
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
