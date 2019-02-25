const express = require("express"),
  chalk = require("chalk"),
  router = express.Router();

const getClanIfo = require("../../requests/clantag/getClanInfo"),
  getWarlog = require("../../requests/clantag/getWarlog"),
  getCurWar = require("../../requests/clantag/getCurWar");

router.param("clan", function(req, res, next, id) {
  getClanIfo(id, response => {
    if (response === "OK") {
      getWarlog(id);
      getCurWar(id);
      console.log(chalk.yellowBright.bgBlack(response));
      res.json(response);
    } else {
      console.log(chalk.redBright.bgBlack(response));
      res.json(response);
    }
  });
});

router.get("/:clan", function(req, res, next) {});

module.exports = router;
