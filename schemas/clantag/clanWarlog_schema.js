const MONGOOSE = require('mongoose');

const { Schema } = MONGOOSE;

const ClanWarlogSchema = Schema({
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
        },
    ],
});

module.exports = MONGOOSE.model('clanWarlog', ClanWarlogSchema);
