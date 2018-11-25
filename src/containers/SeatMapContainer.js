import React, { Component } from 'react';
import SeatMap from '../components/SeatMap';
import { connect } from 'react-redux';
import { fetchSeatmap } from '../actions/seatmap';
import { Route } from 'react-router-dom';

class SeatMapContainer extends Component {

  // try component will update

  render() {
    this.props.fetchSeatmap(this.props.seatmapId)
    return (
      <div className="seat-map">
        <SeatMap concert={this.props.seatmap} concertId={this.props.seatmapId}/>

      </div>
    )
  }
}
// <Route exact path="/concerts/:id" render={({match}) => <SeatMapContainer seatmapId={match.params.id}/>} />
const mapStateToProps = state => {
  return {
    seatmap: state.seatmap.data
  }
}

export default connect(mapStateToProps, { fetchSeatmap })(SeatMapContainer)
