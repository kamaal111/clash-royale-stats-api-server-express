import React, { Component } from "react";

import Playertag from "./components/Playertag";
import Playerdata from "./components/Playerdata/index";
import ChestList from "./components/ChestList/index";
// import Battlelog from "./components/Battlelog";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      chests: [],
      player: [],
      battlelog: [],
      cookie: this.getCookie("playertag"),

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
    if (playertag !== false) {
      return <button onClick={this.updateData}>Upadate</button>;
    } else {
      return <p>Please enter your playertag</p>;
    }
  }

  dataLoading() {
    if (this.state.loading) return <p>Loading.....</p>;
    else
      return (
        <div>
          <Playerdata datap={this.state.player} />
          <ChestList datac={this.state.chests} />
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

  handleSubmit = e => {
    e.preventDefault();

    this.setCookie("playertag", this.state.searchText);
    let cooks = this.getCookie("playertag");
    this.setState({ cookie: cooks });

    this.callApi(cooks);
  };

  handleUpdate = e => {
    e.preventDefault();
    this.updateData();
  };

  updateData = () => {
    console.log("Update data!");
    let player = this.getCookie("playertag");
    fetch(`http://localhost:3001/api/${player}`);
  };

  render() {
    return (
      <div>
        <Playertag
          onSearchChange={this.onSearchChange}
          handleSubmit={this.handleSubmit}
        />
        {this.checkCookie()}
        {this.dataLoading()}
      </div>
    );
  }
}
