import React, { Component } from "react";
import propTypes from "prop-types";
import { Route } from "react-router-dom";

import Playerdata from "./Playerdata/index";
import ChestList from "./ChestList/index";
import BattlelogList from "./BattlelogList/index";

export default class PlayerTag extends Component {
  loadData() {
    if (this.props.loading && this.props.playerCookie !== false)
      return <p>Loading.....</p>;
    else if (this.props.playerCookie === false) return <p>No Playertag</p>;
    else return this.playerRoutes;
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
        render={() => <ChestList datac={this.props.chests} />}
      />
      <Route
        path={`/battlelog/`}
        render={() => <BattlelogList datab={this.props.battlelog} />}
      />
    </div>
  );

  render() {
    return this.loadData();
  }
}

PlayerTag.propTypes = {
  loading: propTypes.bool.isRequired,
  playerCookie: propTypes.string.isRequired,
  player: propTypes.array,
  playerStatus: propTypes.string.isRequired,
  chests: propTypes.array,
  battlelog: propTypes.array
};
