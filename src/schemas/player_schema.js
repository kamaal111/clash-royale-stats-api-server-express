"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = Schema({
  updatedAt: { type: Date, default: Date.now },

  id: String,
  name: String,
  expLevel: Number,
  trophies: Number,
  wins: Number,
  losses: Number,
  battleCount: Number,
  threeCrownWins: Number,
  challengeCardsWon: { type: Number, default: "" },
  challengeMaxWins: { type: Number, default: "" },
  tournamentCardsWon: { type: Number, default: "" },
  tournamentBattleCount: { type: Number, default: "" },
  role: { type: String, default: "" },
  donations: Number,
  donationsReceived: Number,
  totalDonations: Number,
  warDayWins: { type: Number, default: "" },
  warDayWins: { type: Number, default: "" },
  clanCardsCollected: { type: Number, default: "" },

  // clan: {
  //   tag: { type: String, default: "" },
  //   name: { type: String, default: "" },
  //   badgeId: { type: Number, default: "" }
  // },

  arena: { id: Number, name: String },

  // leagueStatistics: {
  //   currentSeason: {
  //     trophies: { type: Number, default: 0 },
  //     bestTrophies: { type: Number, default: 0 }
  //   },
  //   previousSeason: {
  //     id: { type: String, default: "" },
  //     trophies: { type: Number, default: "" },
  //     bestTrophies: { type: Number, default: "" }
  //   },
  //   bestSeason: {
  //     id: { type: String, default: "" },
  //     trophies: { type: Number, default: "" }
  //   }
  // },

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
