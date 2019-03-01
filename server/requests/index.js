const https = require("https");

const options = require("../lib");

module.exports = (tag, num, update) => {
  const req = https.request(options(num, tag), res => {
    let body = "";

    res.on("data", data => {
      body += data;
    });

    res.on("end", () => {
      const parsed = JSON.parse(body);
      // console.log(parsed)

      update(tag, parsed);
    });
  });
  req.end();
};
