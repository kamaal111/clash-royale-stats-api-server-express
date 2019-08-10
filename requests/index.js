const https = require('https');

const options = require('../lib/index');

module.exports = (tag, path, update) => {
    const req = https.request(options(tag, path), res => {
        let body = '';

        res.on('data', data => (body += data));

        res.on('end', () => {
            const parsedBody = JSON.parse(body);
            update(tag, parsedBody);
        });
    });

    req.end();
};
