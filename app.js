const https = require("https"),
  playerTag = require("./data/playerTag.json"),
  bearerToken = require("./data/bearerToken.json");

const options = {
  method: "GET",
  hostname: "api.clashroyale.com",
  path: `/v1/players/%23${playerTag.player0}/upcomingchests`,
  headers: {
    Authorization: bearerToken.key2
  }
};

const req = https.request(options, res => {
  let body = "";

  res.on("data", chunk => {
    body += chunk;
  });

  res.on("end", () => {
    console.log(body);
  });
});

req.end();
