import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar/index';
import SearchForm from './components/SearchForm/index';
import Routes from './components/Routes/index';

// URLs port
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

  componentDidMount = () => {
    const { route, clanCookie, playerCookie } = this.state;

    switch (route) {
      case 'clantag':
        if (clanCookie !== false) this.callClanAPI(clanCookie);
        break;
      case 'playertag':
        if (playerCookie !== false) this.callPlayerAPI(playerCookie);
        break;
      default:
        break;
    }
  };

  // Set new cookie
  setCookie = (cname, cvalue, exdays) => {
    let date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = `expires=${date.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  };

  // Look for matching cookie
  getCookie(name) {
    let pairs = document.cookie.split('; '),
      count = pairs.length,
      parts;

    while (count--) {
      parts = pairs[count].split('=');
      if (parts[0] === name) return parts[1];
    }
    return false;
  }

  // Retrieve clan data from database
  callPlayerAPI = player => {
    const urls = getUrls(player);
    Promise.all([
      fetch(urls.chest)
        .then(results => results.json())
        .then(data => this.setState({ chests: data.doc })),
      fetch(urls.battlelog)
        .then(results => results.json())
        .then(data =>
          this.setState({ battlelog: data.doc, playerChart: data.data })
        ),
      fetch(urls.player)
        .then(results => results.json())
        .then(data => this.setState({ player: data.doc }))
    ]);
    this.setState({ loading: false });
  };

  // Retrieve clan data from database
  callClanAPI = clan => {
    let urls = getUrls(clan);
    Promise.all([
      fetch(urls.clan)
        .then(results => results.json())
        .then(data => this.setState({ clan: data.doc })),
      fetch(urls.warlog)
        .then(results => results.json())
        .then(data =>
          this.setState({ warlog: data.doc, clanChart: data.data })
        ),
      fetch(urls.curWar)
        .then(results => results.json())
        .then(data => this.setState({ curwar: data.doc }))
    ]);
    this.setState({ loading: false });
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
    const { selection, searchText } = this.state;

    const string = this.hideTag(searchText.replace(/O/g, '0').toUpperCase()),
      checks = this.checkForm(string);

    if (checks !== true) this.setState({ formMessage: checks });
    else {
      this.setState({ formMessage: '' });
      this.setCookie(selection, string, 180);
      this.setCookie('freshestCookie', selection, 180);

      const cooks = this.getCookie(selection);

      if (selection === 'playertag') {
        this.setState({ playerCookie: cooks, route: selection });
        this.callPlayerAPI(cooks);
      } else if (selection === 'clantag') {
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
    const { route } = this.state;

    const tag = this.getCookie(route),
      urls = updateUrls(tag);

    if (route === 'playertag') {
      fetch(urls.player)
        .then(results => results.json())
        .then(data => {
          this.setState({ playerStatus: data });

          setTimeout(() => window.location.reload(true), 2500);
        });
    } else if (route === 'clantag') {
      fetch(urls.clan)
        .then(results => results.json())
        .then(data => {
          this.setState({ clanStatus: data });

          setTimeout(() => window.location.reload(true), 2500);
        });
    }
  };

  // Alerts client if form is not filled in correctly
  alertClient = () => {
    const { formMessage } = this.state;

    if (formMessage !== '') {
      return (
        <div className="alert-warning">
          <p>{formMessage}</p>
        </div>
      );
    }
  };

  // Name of navbar and route
  nameNavBar = () => {
    const { route } = this.state;

    let namer = [];

    switch (route) {
      case 'playertag':
      case false:
        namer = ['chests', 'Chests', 'battlelog', 'Battlelog'];
        return namer;
      case 'clantag':
        namer = ['currentWar', 'Current War', 'pastWar', 'Past War'];
        return namer;
      default:
        break;
    }
  };

  render() {
    return (
      <BrowserRouter>
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

        <br className="line-break-5" />

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
      </BrowserRouter>
    );
  }
}
