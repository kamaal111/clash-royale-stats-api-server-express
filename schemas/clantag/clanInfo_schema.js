const { Schema, model } = require('mongoose');

const ClanInfoSchema = Schema({
  updatedAt: String,

  id: String,

  name: String,
  type: String,
  description: String,
  badgeId: Number,
  clanScore: Number,
  clanWarTrophies: Number,

  location: {
    type: Array,
    id: Number,
    name: String,
    // isCountry: Boolean,
    countryCode: String,
  },

  requiredTrophies: Number,
  donationsPerWeek: Number,
  clanChestStatus: String,
  clanChestLevel: Number,
  clanChestMaxLevel: Number,
  members: Number,

  memberList: {
    type: Array,

    tag: String,
    name: String,
    role: String,
    expLevel: Number,
    trophies: Number,
    arena: {
      type: Object,
      id: Number,
      name: String,
    },
    clanRank: Number,
    previousClanRank: Number,
    donations: Number,
    donationsReceived: Number,
    clanChestPoints: Number,
  },
});

module.exports = model('clanInfo', ClanInfoSchema);
