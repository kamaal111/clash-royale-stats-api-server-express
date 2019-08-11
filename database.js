const mongoose = require('mongoose');
const chalk = require('chalk');

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose
            .connect(
                // process.env.DATABASE_URL ||
                'mongodb://127.0.0.1:27017/cr_api',
                {
                    useCreateIndex: true,
                    useNewUrlParser: true,
                    useFindAndModify: false,
                }
            )
            .then(() => {
                console.log(
                    chalk.greenBright.bgBlack.bold(
                        'Database connection successfull'
                    )
                );
            })
            .catch(error => {
                console.error(
                    chalk.redBright.bgBlack.bold('connection error:'),
                    error
                );
            });
    }
}

module.exports = new Database();
