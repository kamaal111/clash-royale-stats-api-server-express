import React, { Component } from "react";
import "./index.css";

// imports from the

class App extends Component {
  state = { playertag: [] };

  // componentDidMount() {
  //   fetch("/chests")
  //     .then(res => res.json())
  //     .then(chest => this.setState({ chest }));
  // }

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <form action="/chests" method="post">
          <label>
            Please enter your playertag:
            <input type="text" name="playertag" />
          </label>
          <input type="submit" value="submit" />
        </form>
        {/*
        {this.state.chests.map(chest => (
          <div key={chest.id}>
            <p>{chest.username}</p>
          </div>
        ))}
        */}
      </div>
    );
  }
}

export default App;
