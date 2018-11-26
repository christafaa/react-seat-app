import React, { Component } from 'react';
import PurchaseForm from '../components/PurchaseForm';
import Row from './Row';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSeatmap } from '../actions/seatmap';

 class SeatMap extends Component {

  // componentDidMount() {
  //   this.props.fetchSeatmap(this.props.concertId)
  // }

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
          <PurchaseForm selectedSeats={this.props.selectedSeats} concertId={this.props.seatmapId}/>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(null, {fetchSeatmap})(SeatMap)
