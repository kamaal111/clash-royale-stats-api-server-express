import React, { Component } from "react";

export default class SearchChests extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch();
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          onChange={this.onSearchChange}
          name="search"
          ref={input => (this.query = input)}
          placeholder="Playertag..."
        />
        <button type="submit" id="submit">
          <i>search</i>
        </button>
      </form>
    );
  }
}
