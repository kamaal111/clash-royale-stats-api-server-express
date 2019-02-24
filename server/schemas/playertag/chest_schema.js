const mongoose = require("mongoose");

const { Schema } = mongoose;

const ChestSchema = Schema({
  id: String,

  items: {
    type: Array,
    name: String,
    index: String
  }
});

module.exports = mongoose.model("Chests", ChestSchema);
