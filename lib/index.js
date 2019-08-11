const { get: getRequest } = require('superagent');

const token = `Bearer ${process.env.BEARERTOKEN1}`;

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
    Authorization: token,
    'cache-control': 'max-age=120',
    'content-type': 'application/json; charset=utf-8',
};

const request = (path, tag, update) => {
    return getRequest(`https://api.clashroyale.com${paths(tag)[path]}`)
        .set(headers)
        .then(result => update(tag, result.body));
};

module.exports = { request };
