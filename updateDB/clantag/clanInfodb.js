const ClanInfo = require('../../schemas/clantag/clanInfo_schema');

module.exports = async (clan, parsed) => {
  try {
    const time = () => {
      let date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60);

      return date.toUTCString();
    };

    const condition = { id: clan };
    const update = {
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
      memberList: parsed.memberList,
    };

    const findClanInfo = await ClanInfo.findOneAndUpdate(condition, update);

    if (!findClanInfo) {
      const createClanInfo = await ClanInfo.create(update);
      console.log(`Saved clan info ${clan}`);
      return { clanInfo: createClanInfo.toJSON() };
    }

    console.log(`Saved clan info ${clan}`);
    return { clanInfo: findClanInfo.toJSON() };
  } catch (error) {
    return console.error(`Save Failed(clan info) ${clan}`, error);
  }
};
