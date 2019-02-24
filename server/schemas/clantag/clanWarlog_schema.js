const mongoose = require("mongoose");

const { Schema } = mongoose;

const clanWarlogSchema = Schema({
  id: String,

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
          collectionDayBattlesPlayed: Number
        }
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
            crowns: Number
          },
          trophyChange: Number
        }
      ]
    }
  ]
});

const ClanWarlog = mongoose.model("clanWarlog", clanWarlogSchema);

module.exports = ClanWarlog;
