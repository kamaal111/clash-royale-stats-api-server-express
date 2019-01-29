import React, { Component } from "react";

import ChestList from "./components/ChestList";
import Playertag from "./components/Playertag";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      chests: [],
      player: [],
      battlelog: [],
      cookie: "",

      loading: true,
      searchText: ""
    };
  }

  componentDidMount() {
    // TODO: callApi then show results(on reload)
    console.log("Mount!");
    // this.callApi();
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
    let hi = this.state.cookie;
    console.log(hi);
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

    e.currentTarget.reset();
    this.callApi(cooks);
  };

  updateApi = () => {
    console.log("Update data!");
    fetch(`http://localhost:3001/api/hello`);
  };

  render() {
    return (
      <div>
        <div>
          <Playertag
            onSearchChange={this.onSearchChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div>
          {this.state.loading ? (
            <p>Loading.....</p>
          ) : (
            <ChestList data={this.state.chests} />
          )}
        </div>
      </div>
    );
  }
}
