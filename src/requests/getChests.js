"use strict";

// modules
const https = require("https");

// options
const options = require("../lib");

const getChest = () => {
  const req = https.request(options(1, "#998LLUR0R"), res => {
    let body = "";

    res.on("data", function(data) {
      body += data;
    });

    res.on("end", function() {
      const Chest = require("../schemas/chest_schema");

      const parsed = JSON.parse(body);

      let count = 0;
      Chest.deleteMany({}, err => {
        if (err) console.error("1 - Save Failed(chest)", err);
        console.log("1 - Refreshing Database(chest)");

        do {
          let item = parsed.items[count];
          Chest({
            name: item.name,
            idName: item.index
          }).save(function(err) {
            if (err) console.error("2 - Save Failed(chest)", err);
          });
          count++;
        } while (count < parsed.items.length);
        console.log("2 - Saved Chests");
      });
    });
  });

  req.end();
};

module.exports.getChest = getChest;
