import React, { Component } from 'react';
import Seat from './Seat';

export default class Row extends Component {
  renderSeats = () => {
    return this.props.seats.map(seat => <Seat seat={seat}/>)
  }

  render() {
    return (
      <div className="row">
        {this.renderSeats()}
      </div>
    )
  }
}
