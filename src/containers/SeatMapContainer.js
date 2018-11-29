import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import SeatMap from '../components/SeatMap';
import SeatMapHeader from '../components/SeatMapHeader';
import AttendeesContainer from '../containers/AttendeesContainer';
import { connect } from 'react-redux';

class SeatMapContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <SeatMapHeader seatmap={this.props.seatmap} />
        <Switch>
          <Route exact path="/concerts/:id" render={() => <SeatMap concert={this.props.seatmap} concertId={this.props.seatmap.id}/>}/>
          <Route exact path="/concerts/:id/attendees" render={() => <AttendeesContainer concertId={this.props.seatmap.id}/>}/>
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
