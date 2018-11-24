import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSelection, removeSelection } from '../actions/seats';

class Seat extends Component {

  handleOnClick = (event) => {
    if (this.props.seat.attendee_id === null && event.target.style.backgroundColor === "red") {
      event.target.style.backgroundColor = "yellow"
      this.props.addSelection(this.props.seat)

    } else if (this.props.seat.attendee_id === null && event.target.style.backgroundColor === "yellow") {
      event.target.style.backgroundColor = "red"
      this.props.removeSelection(this.props.seat)
    }
  }

  render() {
    return (
      <div onClick={this.handleOnClick} style={{backgroundColor: this.props.seat.attendee_id ? "grey" : "red"}} className="seat">
        {this.props.seat.number}
      </div>
    )
  }
}

export default connect(null, {addSelection, removeSelection})(Seat)
