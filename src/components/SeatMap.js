import React, { Component } from 'react';
import PurchaseForm from '../components/PurchaseForm';
import Row from './Row';

 export default class SeatMap extends Component {

  createRows = () => {
    const rows = []
    const seats = this.props.concert.seats.sort((a, b) => parseInt(a.number) - parseInt(b.number)).slice()
    let rowNumber = 1
    while (seats.length > 1) {
      rows.push(<Row key={`${this.props.concert.title} row ${rowNumber}`} seats={seats.splice(0, 10)} />)
      rowNumber += 1
    }
    return rows
  }

  render() {
    return (
      <React.Fragment>
        <div className="seven columns">
          <div style={{borderBottom: "0.1rem solid"}}>
            <h5 style={{display: "inline-block"}}><strong>Seat Map:</strong></h5>
            <div style={{float: "right"}}>
              <div className="key">Available:</div><div style={{backgroundColor: "red", display: "inline-block"}} className="seat"/>
              <div className="key">Sold:</div><div style={{backgroundColor: "grey", display: "inline-block"}} className="seat"/>
            </div>
          </div>
          {this.createRows()}
          <PurchaseForm concertId={this.props.concertId}/>
        </div>
      </React.Fragment>
    )
  }
}
