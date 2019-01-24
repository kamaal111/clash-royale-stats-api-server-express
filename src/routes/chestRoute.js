"use strict";

// modules
const express = require("express"),
  router = express.Router();

const Chest = require("../schemas/chest_schema"),
  Battlelogs = require("../schemas/battlelog_schema"),
  Player = require("../schemas/player_schema");

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
  getChest();
  getPlayerData();
  getBattlelog();
};

// this is our get method
// this method fetches all available data in our database
router.get("/", function(req, res, next) {
  Chest.find((err, doc) => {
    if (err) return res.json({ succes: false, error: err });
    return res.json({ succes: true, doc: doc });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateChests", (req, res, next) => {
  const { id, update } = req.body;
  Chest.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

module.exports = router;
