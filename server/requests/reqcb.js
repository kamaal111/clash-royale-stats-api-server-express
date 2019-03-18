const https = require("https"),
  http = require("http");

const options = require("../lib");

module.exports = (tag, num, update, callback) => {
  const req = https.request(options(num, tag), res => {
    let status = () => {
      const statusCode = http.STATUS_CODES[res.statusCode];
      const statusCodeError = new Error(statusCode);
      return callback(statusCodeError.message);
    };

    if (res.statusCode === 200) {
      let body = "";

      res.on("data", data => (body += data));

      res.on("end", () => {
        const parsed = JSON.parse(body);
        update(tag, parsed);
        status();
      });
    } else {
      status();
    }
  });
  req.end();
};
