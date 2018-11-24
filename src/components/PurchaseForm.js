import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitPurchase } from '../actions/seatmap';

class PurchaseForm extends Component {

  state = {
    attendee: "",
  }

  handleOnChange = event => {
    this.setState({
      attendee: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const concertId = this.props.concertId
    const seatIds = this.props.selectedSeats
    const attendeeId = this.state.attendee
    this.props.submitPurchase(concertId, seatIds, attendeeId)
  }

  renderSelection = () => {
    return this.props.selectedSeats.join(", ")
  }

  render() {
    return (
      <div className="seven columns">
        <h5><strong>Purchase Form</strong></h5>
        <form onSubmit={this.handleOnSubmit}>
          Attendee Name: <input type="text" value={this.state.attendee} onChange={this.handleOnChange} /><br/>
          Selected Seats: <span className="selected-seats">{this.renderSelection()}</span><br/>
          <em>click on the seats above to make your selection</em><br/><br/>
          <input type="submit" value="Confirm Purchase" />
        </form>
      </div>
    )
  }
}

export default connect(null, { submitPurchase })(PurchaseForm)
