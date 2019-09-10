const { get: getRequest } = require('superagent');

const { API_TOKEN } = require('../config');

const paths = tag => ({
    updatePlayer: `/v1/players/%23${tag}`,
    updateChest: `/v1/players/%23${tag}/upcomingchests`,
    updateBattlelog: `/v1/players/%23${tag}/battlelog`,

    updateClanByName: `/v1/clans?name=%23${tag}`,
    updateClan: `/v1/clans/%23${tag}`,
    updateWarlog: `/v1/clans/%23${tag}/warlog`,
    updateCurrentWar: `/v1/clans/%23${tag}/currentwar`,
});

const headers = {
    Accept: 'application/json',
    Authorization: API_TOKEN,
    'cache-control': 'max-age=120',
    'content-type': 'application/json; charset=utf-8',
};

const request = async (path, tag, update) => {
    const { body } = await getRequest(
        `https://api.clashroyale.com${paths(tag)[path]}`
    ).set(headers);

    return update(tag, body);
};

module.exports = request;
