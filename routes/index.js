"use strict";

// modules
const express = require("express"),
  router = express.Router();

// ask for playertag and then redirect to players page

router.get("/", function(req, res, next) {
  next();
});

module.exports = router;
