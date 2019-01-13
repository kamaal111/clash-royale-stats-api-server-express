"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BattlelogSchema = Schema({
  type: String,
  battleTime: Date,
  arena: { id: Number, name: String },
  gameMode: { id: Number, name: String },
  deckSelection: String,

  team: [
    {
      tag: String,
      name: String,
      crowns: Number,

      clan: {
        tag: String,
        name: String,
        badgeId: Number
      },

      cards: [
        {
          name: String,
          id: Number,
          level: Number,
          maxLevel: Number,
          iconUrls: {
            medium: String
          }
        }
      ]
    }
  ]
});

const Battlelogs = mongoose.model("Battlelogs", BattlelogSchema);

module.exports = Battlelogs;
