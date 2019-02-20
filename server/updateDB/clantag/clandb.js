const Clan = require("../../schemas/clantag/clan_schema");

const clandb = (clan, parsed) => {
  Clan.deleteMany({ id: clan }, function(err) {
    if (err) console.error(`1 - Save Failed(Clan) ${clan}`, err);
    console.log(`1 - Refreshing Database(clan) ${clan}`);

    let items = parsed.items[0];

    Clan({
      id: clan,
      name: items.name,
      type: items.type,
      badgeId: items.badgeId,
      clanScore: items.clanScore,
      clanWarTrophies: items.clanWarTrophies,
      location: parsed.location,
      requiredTrophies: items.requiredTrophies,
      donationsPerWeek: items.donationsPerWeek,
      clanChestLevel: items.clanChestLevel,
      clanChestMaxLevel: items.clanChestMaxLevel,
      members: items.members
    }).save(function(err) {
      if (err) console.error(`2 - Save Failed(clan) ${clan}`, err);
    });
    console.log(`2 - Saved clan ${clan}`);
  });
};

module.exports = clandb;
