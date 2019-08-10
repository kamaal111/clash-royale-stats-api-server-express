const { Router } = require('express');
const chalk = require('chalk');

const requests = require('../../requests');
const requestsCB = require('../../requests/reqcb');

const warlogDB = require('../../updateDB/clantag/warlogdb');
const currentWarDB = require('../../updateDB/clantag/curWardb');
const clanInfoDB = require('../../updateDB/clantag/clanInfodb');

const router = new Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    requestsCB(id, 'updateClan', clanInfoDB, response => {
        if (response === 'OK') {
            requests(id, 'updateWarlog', warlogDB);
            requests(id, 'updateCurrentWar', currentWarDB);

            console.log(chalk.yellowBright.bgBlack(response));

            return res.json(response);
        }

        console.log(chalk.redBright.bgBlack(response));

        return res.json(response);
    });
});

module.exports = router;
