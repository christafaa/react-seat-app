import React, { Component } from 'react';
import SeatMap from '../components/SeatMap';
import PurchaseForm from '../components/PurchaseForm';
import { connect } from 'react-redux';
import { fetchSeatmap } from '../actions/seatmap';
import { clearSelection } from '../actions/seats';
import { Route } from 'react-router-dom';

class SeatMapContainer extends Component {

  render() {
    this.props.fetchSeatmap(this.props.seatmapId)
    return (
      <div className="seat-map">
        <SeatMap concert={this.props.seatmap} concertId={this.props.seatmapId}/>

      </div>
    )
  }
}
        // <PurchaseForm selectedSeats={this.props.selectedSeats.selectedSeats} concertId={this.props.concertId}/>
const mapStateToProps = state => {
  return {
    seatmap: state.seatmap.data
  }
}

export default connect(mapStateToProps, { fetchSeatmap, clearSelection })(SeatMapContainer)
