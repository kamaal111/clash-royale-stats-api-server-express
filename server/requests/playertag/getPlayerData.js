// modules
const https = require("https"),
  http = require("http");

// options
const options = require("../../lib");

const getPlayerData = (playertag, callback) => {
  let player = playertag;

  const req = https.request(options(0, player), res => {
    if (res.statusCode === 200) {
      let body = "";

      res.on("data", data => {
        body += data;
      });

      res.on("end", () => {
        const parsed = JSON.parse(body);
        // console.log(parsed);

        const playerdb = require("../../updateDB/playertag/playerdb");
        playerdb(player, parsed);

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

module.exports = getPlayerData;
