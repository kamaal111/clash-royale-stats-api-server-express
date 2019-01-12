"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = Schema({
  tag: String,
  name: String,
  expLevel: Number,
  trophies: Number,
  wins: Number,
  losses: Number,
  battleCount: Number
});

PlayerSchema.index({}, { unique: true });

const Player = mongoose.model("playerData", PlayerSchema);

module.exports = Player;
