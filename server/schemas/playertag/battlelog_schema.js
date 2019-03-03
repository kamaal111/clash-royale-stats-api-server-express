const mongoose = require("mongoose");

const { Schema } = mongoose;

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
      startingTrophies: { type: Number, default: null },
      trophyChange: { type: Number, default: null },
      crowns: Number,
      clan: {
        type: Array,
        default: {},
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
  ],

  opponent: [
    {
      tag: String,
      name: String,
      startingTrophies: { type: Number, default: null },
      trophyChange: { type: Number, default: null },
      crowns: Number,
      clan: {
        type: Array,
        default: {},
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

module.exports = mongoose.model("Battlelogs", BattlelogSchema);
