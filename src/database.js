"use strict";

let mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "cr_api";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(
        `mongodb://${server}/${database}`,
        {
          useCreateIndex: true,
          useNewUrlParser: true
        }
      )
      .then(() => {
        console.log("Database connection successfull");
      })
      .catch(err => {
        console.error("connection error:", err);
      });
  }
}

module.exports = new Database();
