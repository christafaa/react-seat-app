import React, { Component } from 'react';

export default class Seat extends Component {

  checkAvailability = () => {
    return this.props.seat.attendee_id ? "seat available" : "seat unavailable"
  }

  render() {
    return (
      <div className={this.checkAvailability()}>
        {this.props.seat.number}
      </div>
    )
  }
}
