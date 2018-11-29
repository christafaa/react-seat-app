import React, { Component } from 'react';
import PurchaseForm from '../components/PurchaseForm';
import Row from './Row';

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
          <h5><strong>Seat Map:</strong></h5>
          {this.createRows()}
          <PurchaseForm concertId={this.props.concertId}/>
        </div>
      </React.Fragment>
    )
  }
}
