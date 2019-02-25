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
app.use("/api", require("./routes/playertag"));
// chest player route
app.use("/api/chests", require("./routes/playertag/chestRoute"));
// player data route
app.use("/api/player", require("./routes/playertag/playerDataRoute"));
// battlelog playerroute
app.use("/api/battlelog", require("./routes/playertag/battlelogRoute"));
// update clan route
app.use("/api/clan", require("./routes/clantag/index"));
// clan data route
app.use("/api/clan/data", require("./routes/clantag/clanInfo"));
// clan warlog route
app.use("/api/clan/warlog", require("./routes/clantag/warlog"));
// clan current war route
app.use("/api/clan/curwar", require("./routes/clantag/curWar"));

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
