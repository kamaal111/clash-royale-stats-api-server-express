const MONGOOSE = require('mongoose');

const { Schema } = MONGOOSE;

const BATTLELOG_SCHEMA = Schema({
  id: String,

  battlelog: {
    type: Array
  }
});

module.exports = MONGOOSE.model('Battlelogs', BATTLELOG_SCHEMA);
