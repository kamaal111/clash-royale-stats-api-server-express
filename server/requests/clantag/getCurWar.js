const https = require("https");

const options = require("../../lib");

module.exports = clan => {
  const req = https.request(options(6, clan), res => {
    let body = "";

    res.on("data", data => {
      body += data;
    });

    res.on("end", () => {
      const parsed = JSON.parse(body);
      // console.log(parsed)

      const curWardb = require("../../updateDB/clantag/curWardb");
      curWardb(clan, parsed);
    });
  });
  req.end();
};
