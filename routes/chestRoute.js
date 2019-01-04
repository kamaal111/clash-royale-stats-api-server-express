"use strict";

const express = require("express"),
  router = express.Router();

const Chest = require("../models/chest_schema");

const https = require("https");

const playerTag = require("../data/playerTag.json"),
  bearerToken = require("../data/bearerToken.json");

const urls = [`/v1/players/%23${playerTag.player0}/upcomingchests`];

const options = {
  method: "GET",
  hostname: "api.clashroyale.com",
  path: urls[0],
  headers: {
    Authorization: bearerToken.key1
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

      let i = 0;
      do {
        let item = parsed.items[i];
        chest({
          name: item.name,
          idName: item.index
        }).save(function(err) {
          if (err) console.log("Save Failed");
        });
        i++;
      } while (i < parsed.items.length);
      console.log("Finaly Wow");
    });
  });

  req.end();
};

getChest();

router.get("/", function(req, res, next) {
  // getChest();
  // Chest.find({}, function (err, docs) {
  //   //if (err) res.json(err)
  //   res.render('index', {
  //     chests: docs
  //   })
  // })

  next();
});

// router.post("/", (req, res, next) => {
//   res.cookie("playertag", req.cookies.playertag);
//   res.redirect("/");
// });

module.exports = router;
