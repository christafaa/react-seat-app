import React, { Component } from 'react';
import Row from './Row';

export default class SeatMap extends Component {

  createRows = () => {
    const rows = []
    const seats = this.props.concert.seats
    while (seats.length > 1) {
      rows.push(<Row seats={seats.splice(0, 5)} />)
    }
    return rows
  }

  render() {
    return (
      <div className="eight columns">
        <h5><strong>Title: {this.props.concert.title}</strong></h5>
        Date: {this.props.concert.date}<br/>
        Location: {this.props.concert.venue}<br/>
        {this.createRows()}
      </div>
    )
  }
}
