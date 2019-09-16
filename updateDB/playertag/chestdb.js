const Chest = require('../../schemas/playertag/chest_schema');

module.exports = async (player, parsed) => {
  try {
    const chestImages = chest =>
      `https://royaleapi.github.io/cr-api-assets/chests/${chest}.png`;

    const { items } = parsed;
    const modifiedDocs = items.map(item => {
      const chestName = item.name
        .split(' ')
        .reverse()
        .join('-')
        .toLowerCase();

      if (item.name === 'Golden Chest') {
        return {
          ...item,
          image: chestImages(chestName.replace('golden', 'gold')),
        };
      }

      if (item.name === 'Mega Lightning Chest') {
        return {
          ...item,
          image: chestImages(
            chestName.replace('lightning-mega', 'megalightning'),
          ),
        };
      }

      return { ...item, image: chestImages(chestName) };
    });

    const condition = { id: player };
    const update = { id: player, items: modifiedDocs };

    await Chest.findOneAndDelete(condition);

    const createChest = await Chest.create(update);
    console.log(`Saved Chests ${player}`);
    return { chests: await createChest.toJSON() };
  } catch (error) {
    return console.error(`Save Failed(chest) ${player}`, error);
  }
};
