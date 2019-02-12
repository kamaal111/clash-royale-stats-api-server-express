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
      startingTrophies: { type: Number, default: null },
      trophyChange: { type: Number, default: null },
      crowns: Number,

      clan: {
        tag: String,
        tagTeam: String,
        name: String,
        nameTeam: String,
        badgeId: Number,
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
            type: Array,
            default: undefined,
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
      startingTrophies: { type: Number, default: null },
      trophyChange: { type: Number, default: null },
      crowns: Number,

      clan: {
        tag: String,
        tagTeam: String,
        name: String,
        nameTeam: String,
        badgeId: Number,
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
            type: Array,
            default: undefined,
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
