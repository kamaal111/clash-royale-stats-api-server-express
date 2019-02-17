"use strict";

const playerUrls = player => [
  `/v1/players/%23${player}`,
  `/v1/players/%23${player}/upcomingchests`,
  `/v1/players/%23${player}/battlelog`
];

const options = (num, player) => {
  let options = {
    method: "GET",
    hostname: "api.clashroyale.com",
    path: playerUrls(player)[num],
    headers: {
      Authorization: process.env.BEARERTOKEN1
    }
  };
  return options;
};

module.exports = options;
