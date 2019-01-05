"use strict";

// modules
const https = require("https");

// models
const Chest = require("../models/chest_schema");

// testing data
const playerTag = require("../data/playerTag.json"),
  bearerToken = require("../data/bearerToken.json");

const urls = [`/v1/players/%23${playerTag.player0}/upcomingchests`];

const options = {
  method: "GET",
  hostname: "api.clashroyale.com",
  path: urls[0],
  headers: {
    Authorization: bearerToken.key2
  }
};

const getChest = () => {
  const req = https.request(options, res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      const chest = require("../models/chest_schema");

      const parsed = JSON.parse(body);
      console.log(parsed);

      let count = 0;
      Chest.deleteMany({}, err => {
        if (err) console.error("1 - Save Failed", err);
        console.log("1 - Refreshing Database");

        do {
          let item = parsed.items[count];
          chest({
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

module.exports = getChest;
