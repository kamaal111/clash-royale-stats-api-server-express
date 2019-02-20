const express = require("express"),
  chalk = require("chalk"),
  router = express.Router();

const getClanData = require("../../requests/clantag/getClanData"),
  getClanIfo = require("../../requests/clantag/getClanInfo");

router.param("clan", function(req, res, next, id) {
  getClanData(id, response => {
    if (response === "OK") {
      console.log(chalk.yellowBright.bgBlack(response));
      getClanIfo(id);
      res.json(response);
    }
  });
});

router.get("/:clan", function(req, res, next) {});

module.exports = router;
