"use strict";

let mongoose = require("mongoose"),
  chalk = require("chalk");

const server = "127.0.0.1:27017";
const database = "cr_api";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`, {
        useCreateIndex: true,
        useNewUrlParser: true
      })
      .then(() => {
        console.log(
          chalk.greenBright.bgBlack.bold("Database connection successfull")
        );
      })
      .catch(err => {
        console.error(chalk.redBright.bgBlack.bold("connection error:"), err);
      });
  }
}

module.exports = new Database();
