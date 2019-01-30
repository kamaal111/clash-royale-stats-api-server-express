"use strict";

// testing data
const bearerToken = require("../data/bearerToken.json");

const playerUrls = player => [
  `/v1/players/%23${player}`,
  `/v1/players/%23${player}/upcomingchests`,
  `/v1/players/%23${player}/battlelog`
];

const options = (num, player) => {
  let cheese = {
    method: "GET",
    hostname: "api.clashroyale.com",
    path: playerUrls(player)[num],
    headers: {
      Authorization: bearerToken.key0
    }
  };
  return cheese;
};

module.exports = options;
