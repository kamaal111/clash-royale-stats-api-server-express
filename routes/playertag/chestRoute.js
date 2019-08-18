// modules
const { Router } = require('express');

const Chest = require('../../schemas/playertag/chest_schema');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const condition = { id };

    Chest.findOne(condition, (error, doc) => {
        if (error) return res.json({ succes: false, error });
        if (!doc) {
            return res.json({
                succes: false,
                error: { status: 404, message: 'Chest not found' },
            });
        }

        const chestImages = chest =>
            `https://royaleapi.github.io/cr-api-assets/chests/${chest}.png`;

        const { items } = doc;
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
                        chestName.replace('lightning-mega', 'megalightning')
                    ),
                };
            }

            return { ...item, image: chestImages(chestName) };
        });

        return res.json({ succes: true, doc: { items: modifiedDocs } });
    });
});

module.exports = router;
