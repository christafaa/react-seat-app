import React, { Component } from 'react';

export default class Concert extends Component {
  render() {
    return (
      <div className="concert">
        <a href="#">{this.props.title}</a>
      </div>
    )
  }
}
