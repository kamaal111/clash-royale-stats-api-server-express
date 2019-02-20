const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChestSchema = Schema({
  id: String,
  items: {
    type: Array,
    name: String,
    index: {
      unique: false,
      type: String
    }
  }
});

const Chest = mongoose.model("Chests", ChestSchema);

module.exports = Chest;
