import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Skywalkers from './Skywalkers.js'
import TemperatePlanets from './TemperatePlanets.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <small>All of the lovely info is provided by <a href="https://swapi.co/">https://swapi.co/</a></small>
        </div>
        <div className="panels">
          <TemperatePlanets/>
          <Skywalkers />
        </div>
      </div>
    );
  }
}

export default App;
