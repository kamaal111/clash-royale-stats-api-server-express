const MONGOOSE = require('mongoose');

const { Schema } = MONGOOSE;

const BattlelogSchema = Schema({
    id: String,

    battlelog: {
        type: Array,
    },
});

module.exports = MONGOOSE.model('Battlelogs', BattlelogSchema);
