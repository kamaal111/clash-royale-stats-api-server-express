import React, { Component } from "react";
// import { Alert } from "reactstrap";

import Playertag from "./components/Playertag";
import Playerdata from "./components/Playerdata/index";
import ChestList from "./components/ChestList/index";
import BattlelogList from "./components/BattlelogList/index";

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
    let playertag = this.getCookie("playertag");
    if (playertag !== false) {
      console.log("calling");
      this.callApi(playertag);
    }
  }

  checkCookie() {
    let playertag = this.getCookie("playertag");
    if (playertag !== false)
      return (
        <button className="update-button" onClick={this.handleUpdate}>
          <i className="fas fa-sync-alt" />
        </button>
      );
    else return <p>Please enter your playertag</p>;
  }

  dataLoading() {
    let playertag = this.getCookie("playertag");
    if (this.state.loading && playertag !== false) return <p>Loading.....</p>;
    else if (playertag === false) return <p>No Playertag</p>;
    else
      return (
        <div>
          <Playerdata
            datap={this.state.player}
            playerStatus={this.state.playerStatus}
          />
          <ChestList datac={this.state.chests} />
          <BattlelogList datab={this.state.battlelog} />
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
    while (count--) {
      parts = pairs[count].split("=");
      if (parts[0] === name) return parts[1];
    }
    return false;
  }

  callApi = player => {
    console.log("Fetch all!");
    Promise.all([
      fetch(`http://localhost:3001/api/chests/${player}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ chests: data.doc, loading: false });
        }),
      fetch(`http://localhost:3001/api/battlelog/${player}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ battlelog: data.doc });
        }),
      fetch(`http://localhost:3001/api/player/${player}`)
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
    else if (str.search(/[^a-zA-Z0-9]/) !== -1)
      return "Please provide your playertag without symbols";
    else return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    let checks = this.checkForm(this.state.searchText);

    if (checks !== true) this.setState({ formMessage: checks });
    else {
      this.setState({ formMessage: "" });
      this.setCookie("playertag", this.state.searchText, 365);
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
    fetch(`http://localhost:3001/api/${player}`)
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
      <div>
        <div className="alert-success">
          <p>Welcome Clasher</p>
        </div>
        {this.alertClient()}
        <Playertag
          onSearchChange={this.onSearchChange}
          handleSubmit={this.handleSubmit}
          playerCookie={this.state.cookie}
        />

        {this.checkCookie()}
        {this.dataLoading()}
      </div>
    );
  }
}
