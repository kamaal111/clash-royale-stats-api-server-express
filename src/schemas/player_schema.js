"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = Schema({
  updatedAt: { type: Date, default: Date.now },

  id: String,
  name: String,
  expLevel: Number,
  trophies: Number,
  bestTrophies: Number,
  wins: Number,
  losses: Number,
  battleCount: Number,
  threeCrownWins: Number,
  challengeCardsWon: { type: Number, default: 0 },
  challengeMaxWins: { type: Number, default: 0 },
  tournamentCardsWon: { type: Number, default: 0 },
  tournamentBattleCount: { type: Number, default: 0 },
  role: { type: String, default: "" },
  donations: Number,
  donationsReceived: Number,
  totalDonations: Number,
  warDayWins: { type: Number, default: 0 },
  warDayWins: { type: Number, default: 0 },
  clanCardsCollected: { type: Number, default: 0 },

  clan: {
    tag: String,
    name: String,
    badgeId: Number
  },

  arena: { id: Number, name: String },

  leagueStatistics: {
    currentSeason: {
      trophies: Number,
      bestTrophies: Number
    },
    previousSeason: {
      id: String,
      trophies: Number,
      bestTrophies: Number
    },
    bestSeason: {
      id: String,
      trophies: Number
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

const Player = mongoose.model("playerData", PlayerSchema);

module.exports = Player;
