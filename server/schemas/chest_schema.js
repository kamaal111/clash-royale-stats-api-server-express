const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChestSchema = Schema({
  id: String,

  name: String,
  order: {
    unique: false,
    type: String
  }
});

const Chest = mongoose.model("Chests", ChestSchema);

module.exports = Chest;
