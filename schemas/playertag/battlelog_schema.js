const { Schema, model } = require('mongoose');

const BattlelogSchema = Schema({
  id: String,

  battlelog: {
    type: Object,
  },
});

module.exports = model('Battlelogs', BattlelogSchema);
