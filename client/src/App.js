import React, { Component } from "react";

import ChestList from "./components/ChestList";

const urls = ["http://localhost:3001/api/chests"];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      chests: [],
      loading: true,
      isMounted: false
    };
  }

  componentDidMount() {
    console.log("mount!");
    this.callApi();
  }

  callApi = () => {
    console.log("fetching!!!!");
    fetch(urls[0])
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ chests: data.doc, loading: false, isMounted: true });
      })
      .catch(e => {
        console.error("Error fetching and parsing data", e);
      });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Chests</h1>
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
