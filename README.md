# Clash Royale stats API

An API to provide [Clash Royale](http://supercell.com/en/games/clashroyale/) statistics.

## What can it do?

-   Basic actions:
    -   Fetch and save player and clan statistics
    -   Fetch and save players latest battlelogs
    -   Fetch and save players upcomming chests

## Primarily used technologies

-   [Express.js](https://expressjs.com)
-   [Node.js](https://nodejs.org/en/)
-   [MongoDB](https://www.mongodb.org/)
-   [Superagent](http://visionmedia.github.io/superagent/)

## Endpoints

| Route                          | HTTP Verb | Description                                                 |
| ------------------------------ | --------- | ----------------------------------------------------------- |
| `/v1/api/player/:id`           | `PUT`     | Update players statistics, upcomming chests and battlelogs  |
| `/v1/api/player/chests/:id`    | `GET`     | Find players upcomming chests                               |
| `/v1/api/player/battlelog/:id` | `GET`     | Find players latest battlelogs                              |
| `/v1/api/player/player/:id`    | `GET`     | Find players statistics                                     |
| `/v1/api/clan/:id`             | `PUT`     | Update clans statistics, warlogs and current war statistics |
| `/v1/api/clan/data/:id`        | `GET`     | Find clans statistics                                       |
| `/v1/api/clan/warlog/:id`      | `GET`     | Find clans latest warlogs                                   |
| `/v1/api/clan/curwar/:id`      | `GET`     | Find clans current war statistics                           |

## Installition

### Running the API locally

-   Make sure you have installed all these prerequisites on your development machine.

    -   [Node.js](https://nodejs.org/en/download/)
    -   [MongoDB](https://www.mongodb.org/)

-   Register and generate your free API key [here](https://developer.clashroyale.com)

```bash
> git clone git@github.com:kamaal111/clash-royale-stats-api-express.git
> cd clash-royale-stats-api-express
> npm install
```

-   Modify config.js in the root directory with your credentials

```bash
> npm run dbon
```

-   In an separate terminal run

```bash
> npm run watch
```

-   Enjoy!!!
