"use strict";

// modules
const express = require("express"),
  router = express.Router();

// ask for playertag and then redirect to players page and get all api info

router.get("/", function(req, res, next) {
  const player = req.cookies.playerTag;
  if (player) res.render("index", { title: "index", player });
  else res.redirect("/login");
  next();
});

router.get("/login", function(req, res, next) {
  const player = req.cookies.playerTag;
  if (player) res.redirect("/");
  else res.render("login", { title: "login" });
  next();
});

router.post("/login", function(req, res, next) {
  res.cookie("playerTag", req.body.playerTag);
  res.redirect("/");
});

module.exports = router;
