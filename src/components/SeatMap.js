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

  addSelection = number => {
    this.setState({
      selectedSeats: [...this.state.selectedSeats, number]
    })
  }

  removeSelection = number => {
    this.setState({
      selectedSeats: this.state.selectedSeats.filter(seat => seat !== number)
    })
  }

  createRows = () => {
    const rows = []
    let seats = this.props.concert.seats.slice()
    while (seats.length > 1) {
      rows.push(<Row seats={seats.splice(0, 7)} addSelection={this.addSelection} removeSelection={this.removeSelection} />)
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
