"use strict";

// modules
const https = require("https");

// models
const Chest = require("../schemas/chest_schema");

// options
const options = require("../lib");

const getChest = () => {
  const req = https.request(options(1), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      const Chest = require("../schemas/chest_schema");

      const parsed = JSON.parse(body);
      console.log(parsed);

      let count = 0;
      Chest.deleteMany({}, err => {
        if (err) console.error("1 - Save Failed", err);
        console.log("1 - Refreshing Database");

        do {
          let item = parsed.items[count];
          Chest({
            name: item.name,
            idName: item.index
          }).save(function(err) {
            if (err) console.error("2 - Save Failed", err);
          });
          count++;
        } while (count < parsed.items.length);
        console.log("2 - Saved Chests");
      });
    });
  });

  req.end();
};

const getPlayer = () => {
  const req = https.request(options(0), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      // const Player = require("../schemas/player_schema");

      const parsed = JSON.parse(body);
      console.log(parsed);
    });
  });
  req.end();
};

module.exports.getChest = getChest;
module.exports.getPlayer = getPlayer;
