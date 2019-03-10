const urls = tag => [
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

let token = process.env.BEARERTOKEN1;

module.exports = (num, tag) => {
  return {
    method: "GET",
    hostname: "api.clashroyale.com",
    path: urls(tag)[num],
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
      "cache-control": "max-age=120",
      "content-type": "application/json; charset=utf-8"
    }
  };
};
