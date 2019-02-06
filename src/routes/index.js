"use strict";

// modules
const express = require("express"),
  router = express.Router();

const getChests = require("../requests/getChests").getChest,
  getBattlelog = require("../requests/getBattlelog").getBattlelog,
  getPlayerData = require("../requests/getPlayerData").getPlayerData;

router.param("player", function(req, res, next, id) {
  getPlayerData(id, response => {
    if (response === "OK") {
      console.log(response);
      getBattlelog(id, response => {});
      getChests(id, response => {});
      res.json(response);
    } else {
      console.log(response);
      res.json(response);
    }
  });
  // res.json("YES");
});

router.get("/:player", function(req, res, next) {});

module.exports = router;
