import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SeatMap from '../components/SeatMap';
import { connect } from 'react-redux';

class SeatMapContainer extends Component {

  render() {
    return (
      <div className="seat-map">
        <Route exact path="/concerts/:id" render={({match}) => <SeatMap concert={this.props.seatmap} concertId={match.params.id}/>} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    seatmap: state.seatmap.data,
  }
}

export default connect(mapStateToProps)(SeatMapContainer)
