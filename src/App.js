import React, { Component } from 'react';
import ConcertsContainer from './containers/ConcertsContainer';
import SeatMapContainer from './containers/SeatMapContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Seat Manager</h1>
        <ConcertsContainer />
        <SeatMapContainer />
      </div>
    );
  }
}
