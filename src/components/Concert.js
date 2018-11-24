import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Concert extends Component {
  render() {
    return (
      <div className="concert">
        <h5><NavLink to={`/concerts/${this.props.id}`} onClick={() => this.props.handleOnClick(this.props.id)}>{this.props.title}</NavLink></h5>
      </div>
    )
  }
}
