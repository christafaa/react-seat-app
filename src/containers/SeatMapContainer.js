import React, { Component } from 'react';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import SeatMap from '../components/SeatMap';
import AttendeesContainer from '../containers/AttendeesContainer';
import { connect } from 'react-redux';

class SeatMapContainer extends Component {
//move display content to new component

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
        <Switch>
          <Route exact path="/concerts/:id" render={({match}) => <SeatMap concert={this.props.seatmap} concertId={match.params.id} selectedSeats={this.props.selectedSeats}/>}/>
          <Route exact path="/concerts/:id/attendees" render={({match}) => <AttendeesContainer concertId={match.params.id}/>}/>
        </Switch>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    seatmap: state.seatmap.data
  }
}

export default withRouter(connect(mapStateToProps)(SeatMapContainer))
