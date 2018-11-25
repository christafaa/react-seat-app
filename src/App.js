import React, { Component } from 'react';
import ConcertsContainer from './containers/ConcertsContainer';
import SeatMapContainer from './containers/SeatMapContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Seat Manager</h1>
        <ConcertsContainer />
        <Route exact path="/concerts/:id" render={({match}) => <SeatMapContainer seatmapId={match.params.id}/>} />
      </div>
    );
  }
}

export default App;
