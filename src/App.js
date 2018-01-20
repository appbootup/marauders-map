import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ba from 'blockapps-rest-mod';

import utils from './Utils.js'

const { util, config, Promise, rest } = ba;

class App extends Component {

  constructor(props) {
    super(props);
    for (let n of utils.start()) {
      console.log('n is', n);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
