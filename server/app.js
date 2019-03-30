// modules
const EXPRESS = require('express'),
  LOGGER = require('morgan');

let app = EXPRESS();

require('dotenv').config();

app.use(LOGGER('dev'));
app.use(EXPRESS.json());

// mongoDB connection
require('./database');

// CORS
const CORS = require('./lib/CORS');
CORS(app);

// update player route
app.use('/v1/api', require('./routes/playertag'));
// chest player route
app.use('/v1/api/chests', require('./routes/playertag/chestRoute'));
// player data route
app.use('/v1/api/player', require('./routes/playertag/playerDataRoute'));
// battlelog playerroute
app.use('/v1/api/battlelog', require('./routes/playertag/battlelogRoute'));
// update clan route
app.use('/v1/api/clan', require('./routes/clantag/index'));
// clan data route
app.use('/v1/api/clan/data', require('./routes/clantag/clanInfo'));
// clan warlog route
app.use('/v1/api/clan/warlog', require('./routes/clantag/warlog'));
// clan current war route
app.use('/v1/api/clan/curwar', require('./routes/clantag/curWar'));

// catch 404 and forward to error handler
require('./lib/errors').NOT_FOUND(app);

// error handler
require('./lib/errors').errorHandler(app);

module.exports = app;
