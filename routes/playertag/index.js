const { Router } = require('express');
const chalk = require('chalk');

const requests = require('../../requests');
const requestsCB = require('../../requests/reqcb');

const chestDB = require('../../updateDB/playertag/chestdb');
const battlelogDB = require('../../updateDB/playertag/battlelogdb');
const playerDB = require('../../updateDB/playertag/playerdb');

const router = new Router();

router.get('/:player', (req, res) => {
    const { player } = req.params;

    requestsCB(player, 'updatePlayer', playerDB, response => {
        if (response === 'OK') {
            requests(player, 'updateChest', chestDB);
            requests(player, 'updateBattlelog', battlelogDB);

            console.log(chalk.yellowBright.bgBlack(response));

            return res.json(response);
        }

        console.log(chalk.redBright.bgBlack(response));

        return res.json(response);
    });
});

module.exports = router;
