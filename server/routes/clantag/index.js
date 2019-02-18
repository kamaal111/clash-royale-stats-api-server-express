const express = require("express"),
  chalk = require("chalk"),
  router = express.Router();

const getClanData = require("../../requests/clantag/getClanData");

router.param("clan", function(req, res, next, id) {
  getClanData(id, response => {
    if (response === "OK") {
      console.log(chalk.yellowBright.bgBlack(response));
      res.json(response);
    }
  });
});

router.get("/:clan", function(req, res, next) {});

module.exports = router;
