const https = require("https");

const options = require("../../lib");

const getWarlog = clantag => {
  let clan = clantag;

  const req = https.request(options(5, clan), res => {
    let body = "";

    res.on("data", data => {
      body += data;
    });

    res.on("end", () => {
      const parsed = JSON.parse(body);
      // console.log(parsed)

      const warlogdb = require("../../updateDB/clantag/warlogdb");
      warlogdb(clan, parsed);
    });
  });
  req.end();
};

module.exports = getWarlog;
