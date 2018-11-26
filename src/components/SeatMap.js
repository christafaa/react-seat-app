import React, { Component } from 'react';
import Row from './Row';
import { NavLink } from 'react-router-dom';

export default class SeatMap extends Component {

  createRows = () => {
    const rows = []
    const seats = this.props.concert.seats.slice()
    let rowNumber = 1
    while (seats.length > 1) {
      rows.push(<Row key={`${this.props.concert.title} row ${rowNumber}`} seats={seats.splice(0, 10)} />)
      rowNumber += 1
    }
    return rows
  }

// MAKE SEAT COLOR KEY

  render() {
    return (
      <React.Fragment>
        <div className="seven columns">
          <h5><strong>Title: {this.props.concert.title}</strong></h5>
          <p><button>Seat View</button> | <NavLink to={`/concerts/${this.props.concert.id}/attendees`}>List View</NavLink></p>
          Date: {this.props.concert.date}<br/>
          Location: {this.props.concert.location}<br/>
          {this.createRows()}
        </div>
      </React.Fragment>
    )
  }
}
