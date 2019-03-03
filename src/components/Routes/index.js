import React, { Component } from "react";
import propTypes from "prop-types";
import { Route } from "react-router-dom";

import Playerdata from "./PlayerTag/Playerdata/index";
import ChestList from "./PlayerTag/ChestList/index";
import BattlelogList from "./PlayerTag/BattlelogList/index";

import ClanTag from "./ClanTag/ClanData/index";
import CurrentWar from "./ClanTag/CurrentWar/index";
// import PastWar from './ClanTag/PastWar/index'

export default class Routes extends Component {
  loadData() {
    let { route, loading, playerCookie } = this.props;
    if (route === "playertag") {
      if (loading && playerCookie !== false) return <p>Loading.....</p>;
      else if (playerCookie === false) return <p>No Playertag</p>;
      else return this.playerRoutes;
    } else return this.clanRoutes;
  }

  playerRoutes = (
    <div>
      <Route
        exact
        path={`/`}
        render={() => (
          <Playerdata
            datap={this.props.player}
            playerStatus={this.props.playerStatus}
          />
        )}
      />
      <Route
        path={`/chests/`}
        render={() => (
          <ChestList
            datac={this.props.chests}
            playerStatus={this.props.playerStatus}
          />
        )}
      />
      <Route
        path={`/battlelog/`}
        render={() => (
          <BattlelogList
            datab={this.props.battlelog}
            playerStatus={this.props.playerStatus}
          />
        )}
      />
    </div>
  );

  clanRoutes = (
    <div>
      <Route
        exact
        path={`/`}
        render={() => (
          <ClanTag datac={this.props.clan} clanStatus={this.props.clanStatus} />
        )}
      />
      <Route
        path={`/currentWar/`}
        render={() => (
          <CurrentWar
            datac={this.props.curWar}
            clanStatus={this.props.clanStatus}
          />
        )}
      />
      {/* <Route 
        path={`/pastWar/`}
        render={() => (
          <PastWar
            datap={this.props.pastWar}
            clanStatus={this.props.clanStatus}
          />
        )}
      /> */}
    </div>
  );

  render() {
    return this.loadData();
  }
}

Routes.propTypes = {
  loading: propTypes.bool.isRequired,
  playerCookie: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  player: propTypes.array,
  playerStatus: propTypes.string.isRequired,
  chests: propTypes.array,
  battlelog: propTypes.array,
  clan: propTypes.array,
  clanStatus: propTypes.string,
  route: propTypes.string
};
