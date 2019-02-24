// modules
const express = require("express"),
  router = express.Router(),
  chalk = require("chalk");

const getChests = require("../../requests/playertag/getChests"),
  getBattlelog = require("../../requests/playertag/getBattlelog"),
  getPlayerData = require("../../requests/playertag/getPlayerData");

router.param("player", function(req, res, next, id) {
  getPlayerData(id, response => {
    if (response === "OK") {
      getBattlelog(id);
      getChests(id);
      console.log(chalk.yellowBright.bgBlack(response));
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
