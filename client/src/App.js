import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm/index';
import Routes from './components/Routes';

let port = 3000;
const getUrls = tag => {
  return {
    // Player routes
    chest: `http://localhost:${port}/v1/api/chests/${tag}`,
    battlelog: `http://localhost:${port}/v1/api/battlelog/${tag}`,
    player: `http://localhost:${port}/v1/api/player/${tag}`,
    // Clan routes
    clan: `http://localhost:${port}/v1/api/clan/data/${tag}`,
    warlog: `http://localhost:${port}/v1/api/clan/warlog/${tag}`,
    curWar: `http://localhost:${port}/v1/api/clan/curwar/${tag}`
  };
};

const updateUrls = tag => {
  return {
    // Update player
    player: `http://localhost:${port}/v1/api/${tag}`,
    // Update clan
    clan: `http://localhost:${port}/v1/api/clan/${tag}`
  };
};

export default class App extends Component {
  state = {
    // Player States
    chests: [],
    player: [],
    battlelog: [],
    playerChart: [],

    // Clan States
    clan: [],
    curwar: [],
    warlog: [],
    clanChart: [],

    // Player & clan status
    playerStatus: 'player not found, try updating',
    clanStatus: 'clan not found, try updating',

    // Cookie states
    playerCookie: this.getCookie('playertag'),
    clanCookie: this.getCookie('clantag'),
    route: this.getCookie('freshestCookie'),

    // Loading page
    loading: true,

    // Message provided if user doesn't put in the correct playertag
    formMessage: '',

    // Text in form
    searchText: '',

    // Selected option selection under form
    selection: 'playertag'
  };

  componentDidMount() {
    if (this.state.route === 'clantag') {
      if (this.state.clanCookie !== false)
        this.callClanAPI(this.state.clanCookie);
    } else if (this.state.route === 'playertag') {
      if (this.state.playerCookie !== false) {
        this.callPlayerAPI(this.state.playerCookie);
      }
    }
  }

  // Set new cookie
  setCookie(cname, cvalue, exdays) {
    let date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = `expires=${date.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }

  // Look for matching cookie
  getCookie(name) {
    let pairs = document.cookie.split('; ');
    let count = pairs.length;
    let parts;
    // console.log("Get cookie");
    while (count--) {
      parts = pairs[count].split('=');
      if (parts[0] === name) return parts[1];
    }
    return false;
  }

  // Retrieve clan data from database
  callPlayerAPI = player => {
    // console.log("Fetch all!");
    let urls = getUrls(player);
    Promise.all([
      fetch(urls.chest)
        .then(results => results.json())
        .then(data => this.setState({ chests: data.doc, loading: false })),
      fetch(urls.battlelog)
        .then(results => results.json())
        .then(data =>
          this.setState({ battlelog: data.doc, playerChart: data.data })
        ),
      fetch(urls.player)
        .then(results => results.json())
        .then(data => this.setState({ player: data.doc }))
    ]);
  };

  // Retrieve clan data from database
  callClanAPI = clan => {
    // console.log("Fetch all!");
    let urls = getUrls(clan);
    Promise.all([
      fetch(urls.clan)
        .then(results => results.json())
        .then(data => this.setState({ clan: data.doc, loading: false })),
      fetch(urls.warlog)
        .then(results => results.json())
        .then(data =>
          this.setState({ warlog: data.doc, clanChart: data.data })
        ),
      fetch(urls.curWar)
        .then(results => results.json())
        .then(data => this.setState({ curwar: data.doc }))
    ]);
  };

  // Save on search change in state
  onSearchChange = e => this.setState({ searchText: e.target.value });

  // Hides '#'
  hideTag = str => {
    if (str.slice(0, 1) === '#') return str.slice(1);
    else return str;
  };

  // Check tag form
  checkForm = str => {
    if (str.length < 4) return 'Tag provided is too short';
    else if (str.length > 10) return 'Tag provide is too long';
    else if (str.search(/[^PYLQGRJCUV0289]/) !== -1)
      return (
        '# should only include these characters: ' +
        'Numbers: 0, 2, 8, 9 ' +
        'Letters: P, Y, L, Q, G, R, J, C, U, V'
      );
    else return true;
  };

  // Changes state of option selection
  handleSelect = e => this.setState({ selection: e.target.value });

  // Handles submit button
  handleSubmit = e => {
    e.preventDefault();
    let { selection, searchText } = this.state;

    let string = this.hideTag(searchText.replace(/O/g, '0').toUpperCase());
    let checks = this.checkForm(string);

    if (checks !== true) this.setState({ formMessage: checks });
    else {
      this.setState({ formMessage: '' });
      this.setCookie(selection, string, 365);
      this.setCookie('freshestCookie', selection, 365);
      let cooks = this.getCookie(selection);
      if (selection === 'playertag') {
        this.setState({ playerCookie: cooks, route: selection });
        this.callPlayerAPI(cooks);
        //  TODO: redirect to '/' from here
      } else if (selection === 'clantag') {
        this.setState({ clanCookie: cooks, route: selection });
        this.callClanAPI(cooks);
        //  TODO: redirect to '/' from here
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
    // console.log('Update data!');
    let tag = this.getCookie(this.state.route);
    let urls = updateUrls(tag);
    if (this.state.route === 'playertag') {
      fetch(urls.player)
        .then(results => results.json())
        .then(data => this.setState({ playerStatus: data }))
        .then(() => {
          if (this.state.playerStatus === 'OK') {
            this.callPlayerAPI(tag);
            window.location.reload(true);
          }
        });
    } else if (this.state.route === 'clantag') {
      fetch(urls.clan)
        .then(results => results.json())
        .then(data => this.setState({ clanStatus: data }))
        .then(() => {
          if (this.state.clanStatus === 'OK') {
            this.callClanAPI(tag);
            window.location.reload(true);
          }
        });
    }
  };

  // Alerts client if form is not filled in correctly
  alertClient = () => {
    if (this.state.formMessage !== '') {
      return (
        <div className="alert-warning">
          <p>{this.state.formMessage}</p>
        </div>
      );
    }
  };

  // Name of navbar and route
  nameNavBar = () => {
    let namer = [];
    if (this.state.route === 'playertag') {
      namer = ['chests', 'Chests', 'battlelog', 'Battlelog'];
      return namer;
    } else {
      namer = ['currentWar', 'Current War', 'pastWar', 'Past War'];
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
              firLink={''}
              firTitle={'Home'}
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
            pastWar={this.state.warlog}
            playerChart={this.state.playerChart}
            clanChart={this.state.clanChart}
          />
        </div>
      </BrowserRouter>
    );
  }
}
