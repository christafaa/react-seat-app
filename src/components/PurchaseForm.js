import React, { Component } from 'react';

export default class PurchaseForm extends Component {

  state = {
    attendee: "",
    seats: []
  }

  handleOnChange = event => {
    this.setState({
      attendee: event.target.value
    })
  }

  renderSelection = () => {
    return this.state.seats.join(", ")
  }

  render() {
    return (
      <div className="seven columns">
        <h5><strong>Purchase Form</strong></h5>
        <form>
          Attendee Name: <input type="text" value={this.state.attendee} onChange={this.handleOnChange} /><br/>
          Selected Seats: <span className="selected-seats">{this.renderSelection()}</span><br/><br/>
          <input type="submit" value="Confirm Purchase" />
        </form>
      </div>
    )
  }
}
