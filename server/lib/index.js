const URLS = tag => [
  // player urls
  `/v1/players/%23${tag}`,
  `/v1/players/%23${tag}/upcomingchests`,
  `/v1/players/%23${tag}/battlelog`,

  // clan urls
  `/v1/clans?name=%23${tag}`,
  `/v1/clans/%23${tag}`,
  `/v1/clans/%23${tag}/warlog`,
  `/v1/clans/%23${tag}/currentwar`
];

let token = `Bearer ${process.env.BEARERTOKEN0}`;

module.exports = (tag, num) => {
  return {
    method: 'GET',
    hostname: 'api.clashroyale.com',
    path: URLS(tag)[num],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
      'cache-control': 'max-age=120',
      'content-type': 'application/json; charset=utf-8'
    }
  };
};
