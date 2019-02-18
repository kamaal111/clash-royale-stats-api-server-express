// modules
const https = require("https");

// options
const options = require("../lib");

const getBattlelog = playertag => {
  let player = playertag;

  const req = https.request(options(2, player), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      const parsed = JSON.parse(body);
      // console.log(parsed);

      const battlelogdb = require("../updateDB/battlelogdb");
      battlelogdb(player, parsed);
    });
  });

  req.end();
};

module.exports = getBattlelog;
