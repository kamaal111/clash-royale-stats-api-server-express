const express = require('express');
const logger = require('morgan');

const { notFound, errorHandler } = require('./lib/errors');

const app = express();

require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());

// mongoDB connection
require('./database');

// CORS
app.use(require('./lib/cors'));

// update player route
app.use('/v1/api/player', require('./routes/playertag'));
// chest player route
app.use('/v1/api/player/chests', require('./routes/playertag/chestRoute'));
// player data route
app.use('/v1/api/player/player', require('./routes/playertag/playerDataRoute'));
// battlelog playerroute
app.use(
    '/v1/api/player/battlelog',
    require('./routes/playertag/battlelogRoute')
);
// update clan route
app.use('/v1/api/clan', require('./routes/clantag/index'));
// clan data route
app.use('/v1/api/clan/data', require('./routes/clantag/clanInfo'));
// clan warlog route
app.use('/v1/api/clan/warlog', require('./routes/clantag/warlog'));
// clan current war route
app.use('/v1/api/clan/curwar', require('./routes/clantag/curWar'));

// catch 404 and forward to error handler
app.use(notFound);
// error handler
app.use(errorHandler);

module.exports = app;
