"use strict";

// modules
const https = require("https");

// options
const options = require("../lib");

const getChest = playertag => {
  let player = playertag;

  const req = https.request(options(1, player), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });
    res.on("end", function() {
      const Chest = require("../schemas/chest_schema");

      const parsed = JSON.parse(body);

      let count = 0;

      Chest.deleteMany({ id: player }, err => {
        if (err) console.error(`1 - Save Failed(chest) ${player}`, err);
        console.log(`1 - Refreshing Database(chest) ${player}`);

        do {
          let item = parsed.items[count];
          Chest({
            id: player,
            name: item.name,
            order: item.index
          }).save(function(err) {
            if (err) console.error(`2 - Save Failed(chest) ${player}`, err);
          });
          count++;
        } while (count < parsed.items.length);
        console.log(`2 - Saved Chests ${player}`);
      });
    });
  });
  req.end();
};

module.exports.getChest = getChest;
