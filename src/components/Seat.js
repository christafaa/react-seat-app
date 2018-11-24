import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSelection, removeSelection } from '../actions/seats';

class Seat extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.seat.attendee_id ? "grey" : "red"
    }
  }

  handleOnClick = () => {
    if (this.state.color === "red") {
      this.setState({
        color: "yellow"
      })
      this.props.addSelection(this.props.seat)

    } else if (this.state.color === "yellow") {
      this.setState({
        color: "red"
      })
      this.props.removeSelection(this.props.seat)
    }
  }

  render() {
    return (
      <div onClick={this.handleOnClick} style={{backgroundColor: this.state.color}} className="seat">
        {this.props.seat.number}
      </div>
    )
  }
}

export default connect(null, {addSelection, removeSelection})(Seat)
