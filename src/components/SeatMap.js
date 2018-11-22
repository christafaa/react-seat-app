import React, { Component } from 'react';
import Row from './Row';
import PurchaseForm from './PurchaseForm';

export default class SeatMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedSeats: []
    }
  }

  updateSelection = number => {
    this.setState({
      selectedSeats: [...this.state.selectedSeats, number]
    })
  }

  createRows = () => {
    const rows = []
    const seats = this.props.concert.seats
    while (seats.length > 1) {
      rows.push(<Row updateSelection={this.updateSelection} seats={seats.splice(0, 10)} />)
    }
    return rows
  }

  render() {
    return (
      <React.Fragment>
        <div className="seven columns">
          <h5><strong>Title: {this.props.concert.title}</strong></h5>
          Date: {this.props.concert.date}<br/>
          Location: {this.props.concert.venue}<br/>
          {this.createRows()}
        </div>
        <PurchaseForm selectedSeats={this.state.selectedSeats}/>
      </React.Fragment>
    )
  }
}
