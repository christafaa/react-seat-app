import React, { Component } from 'react';

export default class Row extends Component {
  renderSeats = () => {
    return this.props.seats.map(seat => ` ${seat.number} `)
  }

  render() {
    return (
      <div>
        {this.renderSeats()}
      </div>
    )
  }
}
