import React, { Component } from 'react';

export default class Attendee extends Component {
  render() {
    return (
      <div>
        <li>{this.props.name}</li>
      </div>
    )
  }
}
