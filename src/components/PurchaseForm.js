import React, { Component } from 'react';

export default class PurchaseForm extends Component {

  state = {
    attendee: "",
  }

  handleOnChange = event => {
    this.setState({
      attendee: event.target.value
    })
  }

  renderSelection = () => {
    return this.props.selectedSeats.join(", ")
  }

  render() {
    return (
      <div className="seven columns">
        <h5><strong>Purchase Form</strong></h5>
        <form>
          Attendee Name: <input type="text" value={this.state.attendee} onChange={this.handleOnChange} /><br/>
          Selected Seats: <span className="selected-seats">{this.renderSelection()}</span><br/>
          <em>click on the seats above to make your selection</em><br/><br/>
          <input type="submit" value="Confirm Purchase" />
        </form>
      </div>
    )
  }
}
