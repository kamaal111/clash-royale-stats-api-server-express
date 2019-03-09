const https = require("https"),
  http = require("http");

const options = require("../../lib");

module.exports = (clan, callback) => {
  const req = https.request(options(4, clan), res => {
    let status = () => {
      const statusCode = http.STATUS_CODES[res.statusCode];
      const statusCodeError = new Error(statusCode);
      return callback(statusCodeError.message);
    };

    if (res.statusCode === 200) {
      let body = "";

      res.on("data", data => {
        body += data;
      });

      res.on("end", () => {
        const parsed = JSON.parse(body);
        // console.log(parsed);

        const clanInfodb = require("../../updateDB/clantag/clanInfodb");
        clanInfodb(clan, parsed);

        status();
      });
    } else {
      status();
    }
  });
  req.end();
};
