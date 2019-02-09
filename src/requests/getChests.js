"use strict";

// modules
const https = require("https");

// options
const options = require("../lib");

const getChest = playertag => {
  let player = playertag;

  const req = https.request(options(1, player), res => {
    let body = "";

    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      const parsed = JSON.parse(body);

      const chestdb = require("../updateDB/chestdb");
      chestdb(player, parsed);
    });
  });
  req.end();
};

module.exports = getChest;
