"use strict";

// modules
const express = require("express"),
  mongoose = require("mongoose"),
  session = require("express-session"),
  MongoStore = require("connect-mongo")(session),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  createError = require("http-errors"),
  logger = require("morgan");

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(`${__dirname}/public`));

// app.use(express.static("client/build"));

// view engine setup
app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

// mongoose connection
mongoose.connect(
  "mongodb://localhost/cr_api", {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

const db = mongoose.connection;

db.on("error", err => {
  console.error("connection error:", err);
});

db.once("open", () => {
  console.log("db connection succesful");
});

// app.use(
//   session({
//     secret: "Kamaal loves you",
//     resave: true,
//     saveUninitialized: false,
//     store: new MongoStore({
//       mongooseConnection: db
//     })
//   })
// );

const chestsRoute = require("./routes/chestRoute");
app.use("/chests", chestsRoute);

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