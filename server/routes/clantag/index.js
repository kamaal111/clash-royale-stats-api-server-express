const express = require("express"),
  chalk = require("chalk"),
  router = express.Router();

const requests = require("../../requests"),
  requestscb = require("../../requests/reqcb");

const warlogdb = require("../../updateDB/clantag/warlogdb"),
  curWardb = require("../../updateDB/clantag/curWardb"),
  clanInfodb = require("../../updateDB/clantag/clanInfodb");

router.param("clan", function(req, res, next, id) {
  requestscb(id, 4, clanInfodb, response => {
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
