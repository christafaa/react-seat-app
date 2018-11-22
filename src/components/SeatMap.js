import React, { Component } from 'react';

export default class SeatMap extends Component {

  createRows = () => {
    
  }

  render() {

    return (
      <div className="nine columns">
        <h5><strong>Title: {this.props.concert.title}</strong></h5>
        Date: {this.props.concert.date}<br/>
        Location: {this.props.concert.venue}<br/>
        {this.createRows()}
      </div>
    )
  }
}
