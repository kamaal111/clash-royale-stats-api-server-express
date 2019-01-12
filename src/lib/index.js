"use strict";

// testing data
const playerTag = require("../data/playerTag.json"),
  bearerToken = require("../data/bearerToken.json");

const urls = [
  `/v1/players/%23${playerTag.player0}`,
  `/v1/players/%23${playerTag.player0}/upcomingchests`,
  `/v1/players/%23${playerTag.player0}/battlelog`
];

const options = num => {
  let cheese = {
    method: "GET",
    hostname: "api.clashroyale.com",
    path: urls[num],
    headers: {
      Authorization: bearerToken.key0
    }
  };
  return cheese;
};

module.exports = options;
