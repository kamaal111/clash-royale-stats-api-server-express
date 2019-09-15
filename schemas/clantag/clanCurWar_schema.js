const { Schema, model } = require('mongoose');

const ClanCurWarSchema = Schema({
  id: String,

  state: String,
  collectionEndTime: String,
  clan: {
    type: Array,
    tag: String,
    name: String,
    badgeId: Number,
    clanScore: Number,
    participants: Number,
    battlesPlayed: Number,
    wins: Number,
    crowns: Number,
  },
  participants: [
    {
      type: Array,
      tag: String,
      name: String,
      cardsEarned: Number,
      battlesPlayed: Number,
      wins: Number,
      collectionDayBattlesPlayed: Number,
    },
  ],
});

module.exports = model('clanCurWar', ClanCurWarSchema);
