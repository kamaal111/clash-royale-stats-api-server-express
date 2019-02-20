const https = require("https");

const options = require("../../lib");

const getClanInfo = clantag => {
  let clan = clantag;

  const req = https.request(options(4, clan), res => {
    let body = "";

    res.on("data", data => {
      body += data;
    });

    res.on("end", () => {
      const parsed = JSON.parse(body);
      // console.log(parsed);

      const clanInfodb = require("../../updateDB/clantag/clanInfodb");
      clanInfodb(clan, parsed);
    });
  });
  req.end();
};

module.exports = getClanInfo;
