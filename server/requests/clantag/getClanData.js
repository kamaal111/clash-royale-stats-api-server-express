const https = require("https"),
  http = require("http");

const options = require("../../lib");

const getClanData = (clantag, callback) => {
  let clan = clantag;

  const req = https.request(options(3, clan), res => {
    if (res.statusCode === 200) {
      let body = "";

      res.on("data", data => {
        body += data;
      });

      res.on("end", () => {
        const parsed = JSON.parse(body);
        // console.log(parsed.items[0].location);

        const clandb = require("../../updateDB/clantag/clandb");
        clandb(clan, parsed);

        const statusCode = http.STATUS_CODES[res.statusCode];
        const statusCodeError = new Error(statusCode);
        return callback(statusCodeError.message);
      });
    } else {
      const statusCode = http.STATUS_CODES[res.statusCode];
      const statusCodeError = new Error(statusCode);
      return callback(statusCodeError.message);
    }
  });
  req.end();
};

module.exports = getClanData;
