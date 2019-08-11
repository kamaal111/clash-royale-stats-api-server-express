const ClanInfo = require('../../schemas/clantag/clanInfo_schema');

module.exports = (clan, parsed) => {
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
    const options = { upsert: true };

    ClanInfo.findOneAndUpdate(condition, update, options, error => {
        if (error) {
            return console.error(`Save Failed(clan info) ${clan}`, error);
        }

        console.log(`Saved clan info ${clan}`);
    });
};
