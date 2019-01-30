"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BattlelogSchema = Schema({
  id: String,
  type: String,
  battleTime: String,
  arena: { id: Number, name: String },
  gameMode: { id: Number, name: String },
  deckSelection: String,

  team: [
    {
      tag: String,
      name: String,
      startingTrophies: { type: Number, default: "" },
      trophyChange: { type: Number, default: "" },
      crowns: Number,

      // clan: {
      //   tag: { type: String, default: "" },
      //   name: { type: String, default: "" },
      //   badgeId: { type: Number, default: "" }
      // },

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
  ],

  opponent: [
    {
      tag: String,
      name: String,
      startingTrophies: { type: Number, default: "" },
      trophyChange: { type: Number, default: "" },
      crowns: Number,

      // clan: {
      //   tag: { type: String, default: "" },
      //   name: { type: String, default: "" },
      //   badgeId: { type: Number, default: "" }
      // },

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
