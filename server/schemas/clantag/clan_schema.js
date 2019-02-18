const mongoose = require("mongoose");

const { Schema } = mongoose;

const ClanSchema = Schema({
  updatedAt: { type: Date, default: Date.now },

  id: String,
  name: String,
  badgeId: Number,
  type: String,
  clanScore: Number,
  clanWarTrophies: Number,

  location: {
    id: Number,
    name: String,
    // isCountry: Boolean,
    countryCode: String
  },

  requiredTrophies: Number,
  donationsPerWeek: Number,

  clanChestLevel: Number,
  clanChestMaxLevel: Number,

  members: Number
});

const Clan = mongoose.model("clanData", ClanSchema);

module.exports = Clan;
