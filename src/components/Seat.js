import React, { Component } from 'react';

export default class Seat extends Component {

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
      this.props.updateSelection(this.props.seat.number)
    } else if (this.state.color === "yellow") {
      this.setState({
        color: "red"
      })
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
