const mongoose = require('mongoose');
const chalk = require('chalk');

const { DATABASE_URL } = require('./config');

const databaseOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

class Database {
  constructor() {
    this._connect();
  }

  async _connect() {
    try {
      await mongoose.connect(DATABASE_URL, databaseOptions);

      return console.log(
        chalk.greenBright.bgBlack.bold('Database connection successfull'),
      );
    } catch (error) {
      return console.error(
        chalk.redBright.bgBlack.bold('connection error:'),
        error,
      );
    }
  }
}

module.exports = new Database();
