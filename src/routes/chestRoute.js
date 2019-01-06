"use strict";

// modules
const express = require("express"),
  router = express.Router();

const Chest = require("../schemas/chest_schema");
// show chest data

// requests
const chestReq = require("../requests/getChest");

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
  chestReq();
  findChest("Epic Chest");
};

combine();

router.get("/", function(req, res, next) {
  // async function asyncCall () {
  //   console.log('Requesting from API')
  //   chestReq()
  // }
  // asyncCall().then(findChest("Silver Chest"))
  // next();
});

module.exports = router;
