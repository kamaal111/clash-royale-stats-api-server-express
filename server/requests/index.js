const HTTPS = require('https');

const OPTIONS = require('../lib');

module.exports = (tag, num, update) => {
  const REQUEST = HTTPS.request(OPTIONS(num, tag), res => {
    let body = '';

    res.on('data', data => (body += data));

    res.on('end', () => {
      const PARSED = JSON.parse(body);
      update(tag, PARSED);
    });
  });
  REQUEST.end();
};
