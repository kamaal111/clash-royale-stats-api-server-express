const express = require("express"),
  chalk = require("chalk"),
  router = express.Router();

const requests = require("../../requests");

const getClanIfo = require("../../requests/clantag/getClanInfo");

const warlogdb = require("../../updateDB/clantag/warlogdb"),
  curWardb = require("../../updateDB/clantag/curWardb");

router.param("clan", function(req, res, next, id) {
  getClanIfo(id, response => {
    if (response === "OK") {
      requests(id, 5, warlogdb);
      requests(id, 6, curWardb);
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
