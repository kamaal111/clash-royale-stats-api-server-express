// modules
const express = require("express"),
  bodyParser = require("body-parser"),
  logger = require("morgan");

let app = express();

require("dotenv").config();

app.use(logger("dev"));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// view engine setup
app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

// mongoDB connection
require("./database");

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
    return res.status(200).json({});
  }
  next();
});

// update player route
const update = require("./routes/playertag");
app.use("/api", update);
// chest player route
const chestsRoute = require("./routes/playertag/chestRoute");
app.use("/api/chests", chestsRoute);
// player data route
const playerRoute = require("./routes/playertag/playerDataRoute");
app.use("/api/player", playerRoute);
// battlelog playerroute
const battlelogRoute = require("./routes/playertag/battlelogRoute");
app.use("/api/battlelog", battlelogRoute);
// update clan route
const updateClanRoute = require("./routes/clantag/index");
app.use("/api/clan", updateClanRoute);
// clan data route
const clanRoute = require("./routes/clantag/clanData");
app.use("/api/clan/data", clanRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
