const HTTPS = require('https'),
  HTTP = require('http');

const OPTIONS = require('../lib');

module.exports = (tag, num, update, callback) => {
  const REQUEST = HTTPS.request(OPTIONS(num, tag), res => {
    let status = () => {
      let statusCode = HTTP.STATUS_CODES[res.statusCode];
      let statusCodeError = new Error(statusCode);
      return callback(statusCodeError.message);
    };

    if (res.statusCode === 200) {
      let body = '';

      res.on('data', data => (body += data));

      res.on('end', () => {
        const PARSED = JSON.parse(body);
        update(tag, PARSED);
        status();
      });
    } else {
      status();
    }
  });
  REQUEST.end();
};
