import React, { Component } from 'react';

export default class Attendee extends Component {
  render() {
    return (
      <div className="attendee">
        <li>{this.props.name}</li>
      </div>
    )
  }
}
