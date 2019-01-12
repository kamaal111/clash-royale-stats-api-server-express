"use strict";

// modules
const express = require("express"),
  router = express.Router();

const Chest = require("../schemas/chest_schema");
// show chest data

// requests
const getChest = require("../requests/playerData").getChest;
const getPlayer = require("../requests/playerData").getPlayer;

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
  //getChest();
  getPlayer();
};

// combine();

router.get("/", function(req, res, next) {
  combine();
});

module.exports = router;
