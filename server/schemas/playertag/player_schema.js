const MONGOOSE = require('mongoose');

const { Schema } = MONGOOSE;

const PLAYER_SCHEMA = Schema({
  updatedAt: String,

  id: String,

  // player: {
  //   type: Array
  // }
  name: String,
  expLevel: Number,
  trophies: Number,
  bestTrophies: Number,
  wins: Number,
  losses: Number,
  battleCount: Number,
  threeCrownWins: Number,
  challengeCardsWon: { type: Number, default: undefined },
  challengeMaxWins: { type: Number, default: undefined },
  tournamentCardsWon: { type: Number, default: undefined },
  tournamentBattleCount: { type: Number, default: undefined },
  role: { type: String, default: 'No Clan' },
  donations: Number,
  donationsReceived: Number,
  totalDonations: Number,
  warDayWins: { type: Number, default: undefined },
  clanCardsCollected: { type: Number, default: undefined },

  clan: {
    tag: String,
    name: String,
    badgeId: Number
  },

  arena: { id: Number, name: String },

  leagueStatistics: {
    currentSeason: {
      trophies: { type: Number, default: 0 },
      bestTrophies: { type: Number, default: 0 }
    },
    previousSeason: {
      id: { type: String, default: '' },
      trophies: { type: Number, default: 0 },
      bestTrophies: { type: Number, default: 0 }
    },
    bestSeason: {
      id: { type: String, default: '' },
      trophies: { type: Number, default: 0 }
    }
  },

  currentFavouriteCard: {
    name: String,
    maxLevel: Number,
    iconUrls: {
      medium: String
    }
  }
});

module.exports = MONGOOSE.model('playerData', PLAYER_SCHEMA);
