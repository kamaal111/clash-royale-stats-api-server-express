const HTTPS = require('https'),
  HTTP = require('http');

const OPTIONS = require('../lib/index');

module.exports = (tag, num, update, callback) => {
  const REQUEST = HTTPS.request(OPTIONS((tag = tag), (num = num)), res => {
    const status = () => {
      const statusCode = HTTP.STATUS_CODES[res.statusCode];
      const statusCodeError = new Error(statusCode);
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
