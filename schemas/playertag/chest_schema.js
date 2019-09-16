const { Schema, model } = require('mongoose');

const ChestSchema = Schema({
  id: String,

  items: {
    type: Array,
    name: String,
    index: String,
  },
});

module.exports = model('Chests', ChestSchema);
