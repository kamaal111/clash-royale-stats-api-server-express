"use strict";

// modules
const express = require("express"),
  mongoose = require("mongoose"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  createError = require("http-errors"),
  logger = require("morgan"),
  cors = require("cors");

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(`${__dirname}/src/public`));

// app.use(express.static("client"));

// view engine setup
app.set("view engine", "pug");
app.set("views", `${__dirname}/src/views`);

// mongoose connection
const db = require("./src/database");

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

// home routes
// const homePage = require("./src/routes");
// app.use("/api", homePage);

const chestsRoute = require("./src/routes/chestRoute");
app.use("/api/chests", chestsRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
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
