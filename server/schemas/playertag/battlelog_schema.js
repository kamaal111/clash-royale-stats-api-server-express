const mongoose = require("mongoose");

const { Schema } = mongoose;

const BattlelogSchema = Schema({
  id: String,

  battlelog: {
    type: Array
  }
});

module.exports = mongoose.model("Battlelogs", BattlelogSchema);
