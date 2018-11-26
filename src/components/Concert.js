import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Concert extends Component {
  render() {
    return (
      <div className="concert">
        <h5>
          <NavLink to={`/concerts/${this.props.concert.id}`}>
            <div onClick={this.props.handleClick}>
              {this.props.concert.title}
            </div>
          </NavLink>
        </h5>
      </div>
    )
  }
}
