const MONGOOSE = require('mongoose');

const { Schema } = MONGOOSE;

const ChestSchema = Schema({
  id: String,

  items: {
    type: Array,
    name: String,
    index: String
  }
});

module.exports = MONGOOSE.model('Chests', ChestSchema);
