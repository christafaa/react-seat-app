import React, { Component } from 'react';
import Row from './Row';
import PurchaseForm from './PurchaseForm';
import { connect } from 'react-redux'

class SeatMap extends Component {

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

  render() {
    return (
      <React.Fragment>
        <div className="seven columns">
          <h5><strong>Title: {this.props.concert.title}</strong></h5>
          <p><button>Seat View</button> | <button>List View</button></p>
          Date: {this.props.concert.date}<br/>
          Location: {this.props.concert.location}<br/>
          {this.createRows()}
        </div>
        <PurchaseForm selectedSeats={this.props.selectedSeats.selectedSeats}/> {/*this doesn't look right*/}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { selectedSeats: state.selectedSeats }
}

export default connect(mapStateToProps)(SeatMap)
