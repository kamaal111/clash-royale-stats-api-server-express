"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChestSchema = Schema({
  name: {
    type: String,
    enum: [
      "Wooden Chest",
      "Silver Chest",
      "Golden Chest",
      "Crown Chest",
      "Magical Chest",
      "Giant Chest",
      "Super Magical Chest",
      "Epic Chest",
      "Legendary Chest",
      "Season Reward Chest",
      "Lightning Chest",
      "Fortune Chest",
      "King's Chest",
      "Legendary King's Chest",
      "Mega Lightning Chest"
    ],
    unique: false,
    require: true
  },

  idName: {
    type: String,
    unique: false,
    require: true
  }
});

ChestSchema.index(
  {
    name: 1
  },
  {
    unique: true
  }
);

const Chest = mongoose.model("Chest", ChestSchema);

module.exports = Chest;
