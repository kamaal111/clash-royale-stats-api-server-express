"use strict";

// testing data
const playerTag = require("../data/playerTag.json"),
  bearerToken = require("../data/bearerToken.json");

const playerUrls = [
  `/v1/players/${playerTag.player0}`,
  `/v1/players/${playerTag.player0}/upcomingchests`,
  `/v1/players/${playerTag.player0}/battlelog`
];

const options = num => {
  let cheese = {
    method: "GET",
    hostname: "api.clashroyale.com",
    path: playerUrls[num],
    headers: {
      Authorization: bearerToken.key1
    }
  };
  return cheese;
};

module.exports = options;
