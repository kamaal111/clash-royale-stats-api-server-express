const { Schema, model } = require('mongoose');

const ClanWarlogSchema = Schema({
  id: String,

  clanWarlog: {
    type: Object,
    items: [
      {
        type: Array,
        seasonId: Number,
        createdDate: String,
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
        standings: [
          {
            type: Array,
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
            trophyChange: Number,
          },
        ],
        data: {
          type: Object,
          createdDate: {
            type: Array,
          },
          clanScore: {
            type: Array,
          },
          trophyChange: {
            type: Array,
          },
        },
      },
    ],
  },
});

module.exports = model('clanWarlog', ClanWarlogSchema);
