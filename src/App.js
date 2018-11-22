import React, { Component } from 'react';
import ConcertsContainer from './containers/ConcertsContainer.js'

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
