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
      tagTeam: String,
      name: String,
      nameTeam: String,
      startingTrophies: { type: Number, default: "" },
      trophyChange: { type: Number, default: "" },
      crowns: Number,

      clan: {
        tag: { type: String, default: "" },
        tagTeam: String,
        name: { type: String, default: "" },
        nameTeam: String,
        badgeId: { type: Number, default: "" },
        badgeIdTeam: Number
      },

      cards: {
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
        ],
        cardsTeam: [
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
    }
  ],

  opponent: [
    {
      tag: String,
      tagTeam: String,
      name: String,
      nameTeam: String,
      startingTrophies: { type: Number, default: "" },
      trophyChange: { type: Number, default: "" },
      crowns: Number,

      clan: {
        tag: { type: String, default: "" },
        tagTeam: String,
        name: { type: String, default: "" },
        nameTeam: String,
        badgeId: { type: Number, default: "" },
        badgeIdTeam: Number
      },

      cards: {
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
        ],
        cardsTeam: [
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
    }
  ]
});

const Battlelogs = mongoose.model("Battlelogs", BattlelogSchema);

module.exports = Battlelogs;
