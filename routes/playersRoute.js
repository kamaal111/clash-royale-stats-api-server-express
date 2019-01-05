"use strict";

// modules
const express = require("express"),
  router = express.Router();

// show player data

// requests
const chestReq = require("../requests/getChest");

router.get("/", function(req, res, next) {
  next();
});

module.exports = router;
