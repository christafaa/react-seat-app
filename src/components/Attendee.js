import React, { Component } from 'react';

export default class Attendee extends Component {
  render() {
    return (
      <div className="seven columns">
        <li>{this.props.name}</li>
      </div>
    )
  }
}
