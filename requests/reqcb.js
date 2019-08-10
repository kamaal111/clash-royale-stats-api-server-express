const https = require('https');
const http = require('http');

const options = require('../lib');

module.exports = (tag, path, update, callback) => {
    const req = https.request(options(tag, path), res => {
        const statusCode = http.STATUS_CODES[res.statusCode];
        const statusCodeError = new Error(statusCode);

        if (res.statusCode !== 200) return callback(statusCodeError.message);

        let body = '';

        res.on('data', data => (body += data));

        return res.on('end', () => {
            const parsedBody = JSON.parse(body);
            update(tag, parsedBody);
            callback(statusCodeError.message);
        });
    });

    req.end();
};
