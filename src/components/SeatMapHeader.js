import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SeatMapHeader extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.seatmap.id > 0 &&
          <div className="seven columns">
            <h5><strong>Title: {this.props.seatmap.title}</strong></h5>
              <NavLink to={`/concerts/${this.props.seatmap.id}`}>
                Seat View
              </NavLink>
              <span>{" | "}</span>
              <NavLink to={`/concerts/${this.props.seatmap.id}/attendees`}>
                List View
              </NavLink><br/>
            Date: {this.props.seatmap.date}<br/>
            Location: {this.props.seatmap.location}<br/>
          </div>
        }
      </React.Fragment>
    )
  }
}
