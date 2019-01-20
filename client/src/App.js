import React, { Component } from "react";
//import SearchChests from "./components/SearchChests";
import ChestList from "./components/ChestList";

const urls = ["http://localhost:3001/api/chests"];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      chests: [],
      loading: true
    };
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    fetch(urls[0])
      .then(res => res.json())
      .then(data => this.setState({ chests: data.doc, loading: false }))
      .catch(e => {
        console.log(e);
      });
  };

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Chests</h1>
            {/*<SearchChests />*/}
          </div>
        </div>
        <div>
          {this.state.loading ? (
            <p>Loading.....</p>
          ) : (
            <ChestList data={this.state.chests} func={this.callApi} />
          )}
        </div>
      </div>
    );
  }
}
