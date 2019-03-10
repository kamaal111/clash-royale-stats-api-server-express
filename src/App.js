import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm/index";
import Routes from "./components/Routes";

let port = 3000;

export default class App extends Component {
  state = {
    chests: [],
    player: [],
    battlelog: [],

    clan: [],
    warlog: [],
    pastWar: [],

    playerStatus: "player not found, try updating",
    clanStatus: "clan not found, try updating",

    playerCookie: this.getCookie("playertag"),
    clanCookie: this.getCookie("clantag"),
    route: this.getCookie("freshestCookie"),

    loading: true,

    formMessage: "",
    searchText: "",
    selection: "playertag"
  };

  componentDidMount() {
    console.log("Mount!");

    if (this.state.route === "clantag") {
      if (this.state.clanCookie !== false) {
        console.log("calling");
        this.callClanAPI(this.state.clanCookie);
      }
    } else {
      if (this.state.playerCookie !== false) {
        console.log("calling");
        this.callPlayerAPI(this.state.playerCookie);
      }
    }
  }

  setCookie(cname, cvalue, exdays) {
    let date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = `expires=${date.toUTCString()}`;
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

  // Retrieve clan data from database
  callPlayerAPI = player => {
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

  // Retrieve clan data from database
  callClanAPI = clan => {
    console.log("Fetch all!");
    Promise.all([
      fetch(`http://localhost:${port}/api/clan/data/${clan}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ clan: data.doc, loading: false });
        }),
      fetch(`http://localhost:${port}/api/clan/warlog/${clan}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ pastWar: data.doc });
        }),
      fetch(`http://localhost:${port}/api/clan/curwar/${clan}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ curwar: data.doc });
        })
    ]);
  };

  // Save on search change in state
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  // check tag form
  checkForm = str => {
    if (str.length < 4) return "Tag provided is too short";
    else if (str.length > 10) return "Tag provide is too long";
    else if (str.search(/[^PYLQGRJCUV0289]/) !== -1)
      return `Hashtag should only include these characters: 
      Numbers: 0, 2, 8, 9 
      Letters: P, Y, L, Q, G, R, J, C, U, V`;
    else return true;
  };

  // Changes state of option selection
  handleSelect = e => {
    this.setState({ selection: e.target.value });
  };

  // Handles submit button
  handleSubmit = e => {
    e.preventDefault();
    let { selection, searchText } = this.state;

    let checks = this.checkForm(searchText.toUpperCase());

    if (checks !== true) this.setState({ formMessage: checks });
    else {
      this.setState({ formMessage: "" });
      this.setCookie(selection, `${searchText.toUpperCase()}`, 365);
      this.setCookie("freshestCookie", selection, 365);
      let cooks = this.getCookie(selection);
      if (selection === "playertag") {
        this.setState({ playerCookie: cooks, route: selection });
        this.callPlayerAPI(cooks);
      } else if (selection === "clantag") {
        this.setState({ clanCookie: cooks, route: selection });
        this.callClanAPI(cooks);
      }
    }
  };

  // Handle update button
  handleUpdate = e => {
    e.preventDefault();
    this.updateData();
  };

  // Updates player data
  updateData = () => {
    console.log("Update data!");
    let tag = this.getCookie(this.state.route);
    if (this.state.route === "playertag") {
      fetch(`http://localhost:${port}/api/${tag}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ playerStatus: data });
          console.log(data);
        })

        .then(() => {
          if (this.state.playerStatus === "OK") {
            this.callPlayerAPI(tag);
            window.location.reload(true);
          }
        });
    } else if (this.state.route === "clantag") {
      fetch(`http://localhost:${port}/api/clan/${tag}`)
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ clanStatus: data });
          console.log(data);
        })

        .then(() => {
          if (this.state.clanStatus === "OK") {
            this.callClanAPI(tag);
            window.location.reload(true);
          }
        });
    }
  };

  // Alerts client if form is not filled in correctly
  alertClient = () => {
    if (this.state.formMessage !== "")
      return (
        <div className="alert-warning">
          <p>{this.state.formMessage}</p>
        </div>
      );
  };

  // Name of navbar and route
  nameNavBar = () => {
    let namer = [];
    if (this.state.route === "playertag") {
      namer = ["chests", "Chests", "battlelog", "Battlelog"];
      return namer;
    } else {
      namer = ["currentWar", "Current War", "pastWar", "Past War"];
      return namer;
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header>
            <h1>Welcome Clasher</h1>

            <NavBar
              firLink={""}
              firTitle={"Home"}
              secLink={`${this.nameNavBar()[0]}/`}
              secTitle={this.nameNavBar()[1]}
              thirLink={`${this.nameNavBar()[2]}/`}
              thirTitle={this.nameNavBar()[3]}
            />
            {this.alertClient()}
            <SearchForm
              onSearchChange={this.onSearchChange}
              handleSubmit={this.handleSubmit}
              playerCookie={this.state.playerCookie}
              handleUpdate={this.handleUpdate}
              handleSelect={this.handleSelect}
              selection={this.state.selection}
              route={this.state.route}
              clanCookie={this.state.clanCookie}
            />
          </header>

          <Routes
            loading={this.state.loading}
            playerCookie={this.state.playerCookie}
            player={this.state.player}
            playerStatus={this.state.playerStatus}
            chests={this.state.chests}
            battlelog={this.state.battlelog}
            clan={this.state.clan}
            clanStatus={this.state.clanStatus}
            route={this.state.route}
            clanCookie={this.state.clanCookie}
            curWar={this.state.curwar}
            pastWar={this.state.pastWar}
          />
        </div>
      </BrowserRouter>
    );
  }
}
