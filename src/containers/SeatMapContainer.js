import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SeatMap from '../components/SeatMap';
import Attendee from '../components/Attendee';
import { connect } from 'react-redux';

class SeatMapContainer extends Component {

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
              </NavLink>
            <br/>Date: {this.props.seatmap.date}<br/>
            Location: {this.props.seatmap.location}<br/>
            <Route exact path="/concerts/:id" render={({match}) => <SeatMap concert={this.props.seatmap} concertId={match.params.id} selectedSeats={this.props.selectedSeats}/>}/>
            <Route exact path="/concerts/:id/attendees" render={({match}) => <Attendee concertId={match.params.id}/>}/>
          </div>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    seatmap: state.seatmap.data
  }
}

export default connect(mapStateToProps)(SeatMapContainer)
