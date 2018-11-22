import React, { Component } from 'react';

export default class Concert extends Component {
  render() {
    return (
      <div className="concert">
        <h5><a href="#">{this.props.title}</a></h5>
      </div>
    )
  }
}
