import React, { Component } from "react";
import Cookies from "js-cookie";

import ChestList from "./components/ChestList";
import Playertag from "./components/Playertag";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      chests: [],
      player: [],
      battlelog: [],
      loading: true,
      searchText: ""
    };
  }

  componentDidMount() {
    // TODO: callApi then show results(on reload)
    console.log("Mount!");
    this.callApi();
  }

  callApi = () => {
    console.log("Fetch all!");
    Promise.all([
      fetch("http://localhost:3001/api/chests")
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ chests: data.doc, loading: false });
        }),
      fetch("http://localhost:3001/api/battlelog")
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ battlelog: data.doc });
        }),
      fetch("http://localhost:3001/api/player")
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
    Cookies.set(this.state.searchText, "playertag");
    e.currentTarget.reset();
    this.updateApi();
    this.setState({ loading: true });
    window.location.reload();
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
