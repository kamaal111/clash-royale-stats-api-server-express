const urls = tag => [
  `/v1/players/%23${tag}`,
  `/v1/players/%23${tag}/upcomingchests`,
  `/v1/players/%23${tag}/battlelog`,
  `/v1/clans?name=%23${tag}`,
  `/v1/clans/%23${tag}`
];

let token = process.env.BEARERTOKEN0;

const playerOptions = (num, tag) => {
  let options = {
    method: "GET",
    hostname: "api.clashroyale.com",
    path: urls(tag)[num],
    headers: {
      Authorization: token
    }
  };
  return options;
};

module.exports = playerOptions;
