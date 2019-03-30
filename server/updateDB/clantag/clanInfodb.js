const CLAN_INFO = require('../../schemas/clantag/clanInfo_schema');

module.exports = (clan, parsed) => {
  CLAN_INFO.deleteOne({ id: clan }, err => {
    if (err) console.error(`1 - Save Failed(clan info) ${clan}`, err);
    console.log(`1 - Refreshing Database(clan info) ${clan}`);

    let time = () => {
      let date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60);
      return date.toUTCString();
    };

    CLAN_INFO({
      id: clan,

      updatedAt: time(),

      name: parsed.name,
      type: parsed.name,
      description: parsed.description,
      badgeId: parsed.badgeId,
      clanScore: parsed.clanScore,
      clanWarTrophies: parsed.clanWarTrophies,

      location: parsed.location,

      requiredTrophies: parsed.requiredTrophies,
      donationsPerWeek: parsed.donationsPerWeek,
      clanChestStatus: parsed.clanChestStatus,
      clanChestLevel: parsed.clanChestLevel,
      clanChestMaxLevel: parsed.clanChestMaxLevel,
      members: parsed.members,

      memberList: parsed.memberList
    }).save(err => {
      if (err) console.error(`2 - Save Failed(clan info) ${clan}`, err);
    });
    console.log(`2 - Saved clan info ${clan}`);
  });
};
