"use strict";

// modules
const express = require("express"),
  router = express.Router();

const Chest = require("../schemas/chest_schema");

// requests
const getChest = require("../requests/playerData").getChest;
const getPlayerData = require("../requests/playerData").getPlayerData;
const getBattlelog = require("../requests/playerData").getBattlelog;

const findChest = chestName => {
  Chest.find({ name: chestName })
    .then(docs => {
      console.log(docs);
      console.log("Found Chests");
    })
    .catch(err => {
      console.error(err);
    });
};

const combine = () => {
  getBattlelog();
};

router.get("/", function(req, res, next) {
  combine();
});

module.exports = router;
