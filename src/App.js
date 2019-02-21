import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import Playerdata from "./components/PlayerTag/Playerdata/index";
import ChestList from "./components/PlayerTag/ChestList/index";
import BattlelogList from "./components/PlayerTag/BattlelogList/index";

let port = 3000;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      chests: [],
      player: [],
      battlelog: [],

      playerStatus: "player not found",
      playerNotFound: false,

      cookie: this.getCookie("playertag"),
      formMessage: "",

      loading: true,
      searchText: ""
    };
  }

  componentDidMount() {
    console.log("Mount!");
    // let playertag = this.getCookie("playertag");
    if (this.state.cookie !== false) {
      console.log("calling");
      this.callApi(this.state.cookie);
    }
  }

  loadData() {
    // let playertag = this.getCookie("playertag");
    if (this.state.loading && this.state.cookie !== false)
      return <p>Loading.....</p>;
    else if (this.state.cookie === false) return <p>No Playertag</p>;
    else
      return (
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Playerdata
                datap={this.state.player}
                playerStatus={this.state.playerStatus}
              />
            )}
          />
          <Route
            path="/chests"
            render={() => <ChestList datac={this.state.chests} />}
          />
          <Route
            path="/battlelog"
            render={() => <BattlelogList datab={this.state.battlelog} />}
          />
        </div>
      );
  }

  setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }

  getCookie(name) {
    let pairs = document.cookie.split("; "),
      count = pairs.length,
      parts;
    console.log("Get cookie");
    while (count--) {
      parts = pairs[count].split("=");
      if (parts[0] === name) return parts[1];
    }
    return false;
  }

  callApi = player => {
    console.log("Fetch all!");
    Promise.all([
      fetch(`http://localhost:${port}/api/chests/${player}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ chests: data.doc, loading: false });
        }),
      fetch(`http://localhost:${port}/api/battlelog/${player}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ battlelog: data.doc });
        }),
      fetch(`http://localhost:${port}/api/player/${player}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ player: data.doc });
        })
    ]);
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  checkForm = str => {
    if (str.length < 4) return "Playertag provided is too short";
    else if (str.length > 12) return "Playertag provide is too long";
    else if (str.search(/[^PYLQGRJCUV0289]/) !== -1)
      return `Playertag should only include these characters: Numbers: 0, 2, 8, 9 Letters: P, Y, L, Q, G, R, J, C, U, V`;
    else return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.setState({playerStatus: 'player not found'})
    let checks = this.checkForm(this.state.searchText.toUpperCase());

    if (checks !== true) this.setState({ formMessage: checks });
    // else if (this.state.formMessage === '')
    else {
      this.setState({ formMessage: "" });
      this.setCookie("playertag", this.state.searchText.toUpperCase(), 365);
      let cooks = this.getCookie("playertag");
      this.setState({ cookie: cooks });

      this.callApi(cooks);
    }
  };

  handleUpdate = e => {
    e.preventDefault();
    this.updateData();
  };

  updateData = () => {
    console.log("Update data!");
    let player = this.getCookie("playertag");
    fetch(`http://localhost:${port}/api/${player}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ playerStatus: data });
        console.log(data);
      })
      .then(() => {
        if (this.state.playerStatus === "OK") {
          this.callApi(player);
          this.setState({ playerNotFound: false });
          window.location.reload();
        } else this.setState({ playerNotFound: true });
      });
  };

  alertClient = () => {
    if (this.state.formMessage !== "")
      return (
        <div className="alert-warning">
          <p>{this.state.formMessage}</p>
        </div>
      );
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header>
            <h1>Welcome Clasher</h1>

            {this.alertClient()}
            <NavBar />
            <SearchForm
              onSearchChange={this.onSearchChange}
              handleSubmit={this.handleSubmit}
              playerCookie={this.state.cookie}
              handleUpdate={this.handleUpdate}
            />
          </header>
          <Switch>{this.loadData()}</Switch>
        </div>
      </BrowserRouter>
    );
  }
}
