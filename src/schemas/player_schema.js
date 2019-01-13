"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = Schema({
  updatedAt: { type: Date, default: Date.now },

  tag: String,
  name: String,
  expLevel: Number,
  trophies: Number,
  wins: Number,
  losses: Number,
  battleCount: Number,
  threeCrownWins: Number,
  challengeCardsWon: Number,
  challengeMaxWins: Number,
  tournamentCardsWon: Number,
  tournamentBattleCount: Number,
  role: String,
  donations: Number,
  donationsReceived: Number,
  totalDonations: Number,
  warDayWins: Number,
  warDayWins: Number,
  clanCardsCollected: Number,

  clan: {
    tag: { type: String, default: "" },
    name: { type: String, default: "" },
    badgeId: { type: Number, default: "" }
  },

  arena: { id: Number, name: String },

  leagueStatistics: {
    currentSeason: { trophies: Number, bestTrophies: Number },
    previousSeason: { id: String, trophies: Number, bestTrophies: Number },
    bestSeason: { id: String, trophies: Number }
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
