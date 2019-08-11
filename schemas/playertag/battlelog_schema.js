const { Schema, model } = require('mongoose');

const BattlelogSchema = Schema({
    id: String,

    battlelog: {
        type: Array,
    },
});

module.exports = model('Battlelogs', BattlelogSchema);
