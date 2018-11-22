import React, { Component } from 'react';
import Seat from './Seat';

export default class Row extends Component {
  renderSeats = () => {
    return this.props.seats.map(seat => <Seat seat={seat} addSelection={this.props.addSelection} removeSelection={this.props.removeSelection}/>)
  }

  render() {
    return (
      <div className="row">
        {this.renderSeats()}
      </div>
    )
  }
}
