"use strict";

let mongoose = require("mongoose"),
  chalk = require("chalk");

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(
        // `${process.env.DBPATH}${process.env.DBUSER}${process.env.DBPASS}${
        //   process.env.DBSERVER
        // }`
        process.env.DBLOCAL,
        {
          useCreateIndex: true,
          useNewUrlParser: true
        }
      )
      .then(() => {
        console.log(
          chalk.greenBright.bgBlack.bold(`Database connection successfull`)
        );
      })
      .catch(err => {
        console.error(chalk.redBright.bgBlack.bold("connection error:"), err);
      });
  }
}

module.exports = new Database();
