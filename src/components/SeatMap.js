import React, { Component } from 'react';
import Row from './Row';
import PurchaseForm from './PurchaseForm';
import { connect } from 'react-redux'

class SeatMap extends Component {

  createRows = () => {
    const rows = []
    let seats = this.props.concert.seats.slice()
    while (seats.length > 1) {
      rows.push(<Row seats={seats.splice(0, 7)} />)
    }
    return rows
  }

  render() {
    return (
      <React.Fragment>
        <div className="seven columns">
          <h5><strong>Title: {this.props.concert.title}</strong></h5>
          <p><a href="#">Seat View</a> | <a href="#">List View</a></p>
          Date: {this.props.concert.date}<br/>
          Location: {this.props.concert.venue}<br/>
          {this.createRows()}
        </div>
        <PurchaseForm selectedSeats={this.props.selectedSeats.selectedSeats}/> {/*this doesn't look right*/}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedSeats: state.selectedSeats
  }
}

export default connect(mapStateToProps)(SeatMap)
