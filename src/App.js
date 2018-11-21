import React, { Component } from 'react';
import './App.css';
import ConcertsContainer from './containers/concertsContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Seat Manager</h1>
        <ConcertsContainer />
      </div>
    );
  }
}

export default App;
