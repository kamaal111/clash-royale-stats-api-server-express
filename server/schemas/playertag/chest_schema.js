const MONGOOSE = require('mongoose');

const { Schema } = MONGOOSE;

const CHEST_SCHEMA = Schema({
  id: String,

  items: {
    type: Array,
    name: String,
    index: String
  }
});

module.exports = MONGOOSE.model('Chests', CHEST_SCHEMA);
