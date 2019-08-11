const urls = tag => ({
    updatePlayer: `/v1/players/%23${tag}`,
    updateChest: `/v1/players/%23${tag}/upcomingchests`,
    updateBattlelog: `/v1/players/%23${tag}/battlelog`,

    updateClanByName: `/v1/clans?name=%23${tag}`,
    updateClan: `/v1/clans/%23${tag}`,
    updateWarlog: `/v1/clans/%23${tag}/warlog`,
    updateCurrentWar: `/v1/clans/%23${tag}/currentwar`,
});

const token = `Bearer ${process.env.BEARERTOKEN1}`;

module.exports = (tag, path) => ({
    method: 'GET',
    hostname: 'api.clashroyale.com',
    path: urls(tag)[path],
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
        'cache-control': 'max-age=120',
        'content-type': 'application/json; charset=utf-8',
    },
});
